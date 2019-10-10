# showcase projectdocker

## Getting started
- Run `docker-compose up --build`

### Requests
- invalid
  - curl -X POST -H 'Content-Type:application/json' -d '{"key": "anything else"}' localhost:3000
- valid
  - curl -X POST -H 'Content-Type:application/json' -d '{"key": "k3y"}' localhost:3000