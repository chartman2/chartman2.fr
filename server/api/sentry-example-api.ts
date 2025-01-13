export default defineEventHandler(event => {
  console.log(event)
  throw new Error("Sentry Example API Route Error")
})