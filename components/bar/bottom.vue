<template>
  <v-footer
    app
    min-height="72"
    color="background"
  >
    <v-container>
      <v-row>
        <v-col
          cols="4"
          class="d-flex flex-wrap justify-start"
        >
          <v-btn-group
            v-for="(s, i) in social"
            :key="i"
          >
            <v-btn
              :href="s.route"
              color="background"
              variant="flat"
              target="_blank"
              size="small"
              class="px-0"
            >
              <v-icon
                v-if="s.icon === 'i-mdi:facebook'"
                size="large"
                icon="i-mdi:facebook"
              />
              <v-icon
                v-if="s.icon === 'i-mdi:linkedin'"
                size="large"
                icon="i-mdi:linkedin"
              />
            </v-btn>
          </v-btn-group>
        </v-col>
        <v-col
          cols="4"
          class="align-self-center text-center"
        >
          {{ currentRangeYears }}
        </v-col>
        <v-col
          v-if="!mobile"
          class="d-flex flex-wrap justify-end align-center flex-shrink-1 text-white"
          cols="4"
        >
          <v-btn-group
            v-for="(s, i) in links"
            :key="i"
          >
            <v-btn
              :href="s.href"
              color="background"
              variant="flat"
              target="_blank"
              size="small"
              class="px-0"
            >
              <v-icon
                v-if="s.icon === 'i-mdi:nuxt'"
                size="large"
                icon="i-mdi:nuxt"
              />
              <v-icon
                v-if="s.icon === 'i-mdi:vuetify'"
                size="large"
                icon="i-mdi:vuetify"
              />
              <v-icon
                v-if="s.icon === 'i-mdi:language-ruby-on-rails'"
                size="large"
                icon="i-mdi:language-ruby-on-rails"
              />
            </v-btn>
          </v-btn-group>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { CSocial, CLinks } from '~/utils/common'

const { mobile } = useDisplay()
const dayjs = useDayjs()

const currentYear = ref(dayjs().year())
const currentRangeYears = ref(currentYear.value === 2022 ? '2022' : `2022-${currentYear.value}`)

const social = reactive(CSocial)

const links = reactive(CLinks)
</script>
