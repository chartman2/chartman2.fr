<template>
  <ClientOnly>
    <v-card
      id="hero"
      color="blue lighten-1"
    >
      <v-img
        :min-height="mobile ? '45vh' : '70vh'"
        src="/backgrounds/hero-2.svg"
        contain
      >
        <v-container
          class="d-flex align-self-center pt-12"
          fluid
        >
          <v-row
            align="center"
            class="mx-auto pt-12"
            justify="center"
          >
            <v-col
              class="text-center pt-12"
              cols="12"
              tag="h1"
            >
              <span
                :class="[mobile ? 'display-1' : 'display-2']"
                class="font-weight-light pb-4 align-self-center"
              >
                Bienvenu sur
              </span>

              <span
                :class="[mobile ? 'display-3' : 'display-4']"
                class="font-weight-black"
              >
                chartman2.fr
              </span>
            </v-col>

            <v-btn
              class="align-self-end"
              fab
              variant="outlined"
              icon="i-mdi:chevron-double-down"
              @click="useScroll('about-me')"
            />
          </v-row>
        </v-container>
      </v-img>
    </v-card>
  </ClientOnly>
</template>

<script setup>
const { mobile } = useDisplay()
</script>
