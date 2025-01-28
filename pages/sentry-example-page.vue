<script setup>
  import * as Sentry from "@sentry/nuxt"

  const triggerError = () => {
    throw new Error("Nuxt Button Error")
  };

  const getSentryData = () => {
    Sentry.startSpan(
      {
        name: "Example Frontend Span",
        op: "test",
      },
      async () => {
        await $fetch("/api/sentry-api")
      },
    )
  }

</script>

<template>
  <button id="errorBtn" @click="triggerError">Trigger Error</button>
  <button type="button" @click="getSentryData">Throw Server Error</button>
</template>