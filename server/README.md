# Kazi Web Lab Portfolio API

The backend API for the Kazi Web Lab portfolio. It is an Express application
that stores portfolio content in MongoDB and uploads project thumbnails to
ImageKit.

## Requirements

- Node.js 20.19 or newer
- npm
- A MongoDB database
- An ImageKit account for project thumbnail uploads

## Setup

From the `server` directory, install dependencies:

```bash
npm ci
```

Create a `.env.local` file in `server` with your own values:

```dotenv
PORT=5001
HOSTNAME=localhost
DBURL=mongodb://127.0.0.1:27017/kazi-web-lab
JWT_SECRET=replace-with-a-long-random-secret
IMAGEKIT_PUBLIC_KEY=your-imagekit-public-key
IMAGEKIT_PRIVATE_KEY=your-imagekit-private-key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your-imagekit-id
```

`PORT` defaults to `5001` if omitted. `DBURL` is required for database access,
and `JWT_SECRET` is required for admin authentication. ImageKit credentials
are required for project thumbnail uploads. Keep real credentials out of
source control; `.env.local` is ignored by Git.

Start the development server:

```bash
npm run dev
```

This script loads `.env.local` and restarts the server when source files change.
The `npm start` script does not load `.env.local`; in production, provide the
environment variables through the hosting platform. To run the production
script locally with the same file, use:

```bash
node --env-file=.env.local src/server.js
```

The API uses `http://localhost:5001` with the example settings. Check
`GET /api/health` to verify the server is responding. The server connects to
MongoDB when it starts.

## Authentication

Admin login is handled by `POST /api/admin`. A successful login returns a JWT
and also sets it in an HTTP-only cookie. Protected routes accept that cookie or
an authorization header:

```http
Authorization: Bearer <token>
```

Tokens expire after seven days. Protected write routes require an admin token.

> **Deployment warning:** `PUT /api/admin/reset` is currently public and can
> create the initial admin account when no account exists. The controller uses
> a hard-coded initial credential. Secure or disable this bootstrap route
> before exposing the API publicly, and change the initial password
> immediately.

## API

Base URL: `http://localhost:5001`

Successful responses generally include `status: true`, a `message`, and
sometimes a `data` value. Errors generally include `status: false` and a
`message`.

### Health and portfolio data

| Method | Path | Access | Description |
| --- | --- | --- | --- |
| `GET` | `/` | Public | Welcome response |
| `GET` | `/api/health` | Public | Health-check response |
| `GET` | `/api/projects` | Public | Return all projects |
| `GET` | `/api/projects/recent-projects` | Public | Return up to five projects |
| `GET` | `/api/contacts` | Public | Return contact and social-link records |
| `GET` | `/api/technologies` | Public | Return technology records |

### Admin authentication

| Method | Path | Access | Description |
| --- | --- | --- | --- |
| `POST` | `/api/admin` | Public | Log in with `{ "email": "...", "pass": "..." }` |
| `PUT` | `/api/admin/reset` | Public bootstrap | Create the initial admin only when no admin exists |
| `GET` | `/api/admin` | Admin | Return admin data without the password |
| `PUT` | `/api/admin` | Admin | Change the admin password |

Password update request:

```json
{
  "email": "admin@example.com",
  "oldPass": "current-password",
  "newPass": "new-password"
}
```

### Protected content updates

All routes in this section require an admin token.

| Method | Path | Request | Description |
| --- | --- | --- | --- |
| `POST` | `/api/projects` | `multipart/form-data` | Create a project |
| `PATCH` | `/api/projects/:id` | `multipart/form-data` | Update a project |
| `DELETE` | `/api/projects/:id` | No body | Delete a project |
| `PUT` | `/api/contacts` | JSON | Create or update contact/social links |
| `PUT` | `/api/technologies` | JSON | Create or update the technologies record |

#### Projects

Project creation requires `name`, `desc`, `usedTools`, `liveUrl`, and a
`thumbnail` file. `gitLink` is optional. `usedTools` must reach the controller
as an array. With Postman form data, use repeated `usedTools[]` fields for
individual tools. The thumbnail must be JPG, PNG, or WEBP and no larger than
5 MB.

Example fields:

```text
name       = My Portfolio
desc       = A portfolio project
usedTools[]= React
usedTools[]= Tailwind CSS
liveUrl    = https://example.com
gitLink    = https://github.com/example/project
thumbnail  = <image file>
```

The thumbnail is uploaded to ImageKit under `/portfolio-projects`.

For `PATCH /api/projects/:id`, provide the fields to update and a replacement
`thumbnail`. The current controller attempts an ImageKit upload even when no
thumbnail is sent, so a field-only update may fail.

#### Contacts

Send both `contacts` and `socials` as objects. At least one of them must have a
value.

```json
{
  "contacts": {
    "phone": "+15551234567",
    "whatsApp": "15551234567",
    "messenger": "https://m.me/example"
  },
  "socials": {
    "facebook": "https://facebook.com/example",
    "youtube": "https://youtube.com/@example",
    "github": "https://github.com/example",
    "instagram": "https://instagram.com/example",
    "tiktok": "https://tiktok.com/@example"
  }
}
```

#### Technologies

Send a non-empty `technologies` array as JSON:

```json
{
  "technologies": ["HTML5", "CSS3", "JavaScript"]
}
```

Use `Content-Type: application/json` for the contacts and technologies request
bodies.

## Data models

- **Projects:** name, description (`desc`), tools (`usedTools`), live URL,
  optional Git URL, thumbnail URL, and timestamps.
- **Contacts:** phone, WhatsApp, Messenger, social URLs, and timestamps.
- **Technologies:** a `technologies` array and timestamps.
- **Users:** email, hashed password, and timestamps.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start with Nodemon and load `.env.local` |
| `npm start` | Start with Node using environment variables already provided |
| `npm test` | Not configured yet; currently exits with an error |