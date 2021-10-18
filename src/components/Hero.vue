<!-- @format -->

<template>
  <div class="heroBlock">
    <div class="container">
      <v-icon color="primary">fas fa-arrow-circle-left</v-icon>
      <div class="container">
        <h2 class="ml-4">PRENOTA SERVIZIOIN STORE</h2>
        <p class="ml-4 pt-5">
          All’interno delle strutture e dei mezzi ParkinGO è necessario
          indossare la <br />
          mascherina e rispettare la distanza di sicurezza interpersonale.
        </p>

        <section id="01" class="ml-4 pt-15">
          <div class="rectangle1">
            <h2 color="primary">01. Prenota ora i tamponi in Drive-in</h2>
            <v-card class="mx-auto" color="bbb" outlined>
              <v-list-item three-line>
                <v-list-item-content color="primary">
                  <div class="txt mt-4">
                    <v-icon class="ml-4" color="primary"
                      >fas fa-map-marker-alt</v-icon
                    >
                    <span
                      style="width: 435px; height:48px;top:148px;left:160px;"
                    >
                      ParkingGO Malpensa</span
                    >
                    <span class="divider" color="primary">Modiﬁca negozio</span>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </div>
        </section>

        <section id="02" class="ml-4 pt-15">
          <div class="rectangle2">
            <h2 color="primary">02. Prenota ora i tamponi in Drive-in</h2>
            <v-item-group active-class="primary">
              <v-container>
                <v-row>
                  <v-col v-for="n in 1" :key="n" cols="12" md="4">
                    <v-item v-slot="{active, toggle}">
                      <v-card
                        class="d-flex align-center"
                        color="bbb"
                        height="200"
                        @click="toggle"
                      >
                        <v-container fluid>
                          <v-row align="center" class="">
                            <span class="ml-12" color="wht"></span> Tampone
                            Rapido Antigenico<v-icon
                              color="white"
                              class="ml-2 mr-16 "
                              >fas fa-info-circle</v-icon
                            >
                            <v-col class="d-flex ml-8" cols="8" sm="6">
                              $90
                            </v-col>
                            <v-col
                              class="d-flex pt-10"
                              cols="12"
                              sm="2"
                              md="4"
                              lg="4"
                            >
                              <v-select
                                :items="items"
                                label="Qta"
                                dense
                                outlined
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card>
                    </v-item>
                  </v-col>
                  <v-col v-for="n in 1" :key="n" cols="12" md="4">
                    <v-item v-slot="{active, toggle}">
                      <v-card
                        class="d-flex align-center"
                        color="accent"
                        height="200"
                        @click="toggle"
                      >
                        <v-container fluid>
                          <v-row align="center" class="">
                            <span class="ml-12" color="wht"></span> Tampone
                            Molecolare PCR<v-icon
                              color="white"
                              class="ml-2 mr-16 "
                              >fas fa-info-circle</v-icon
                            >
                            <v-col class="d-flex ml-8" cols="8" sm="6">
                              $90
                            </v-col>
                            <v-col
                              class="d-flex pt-10"
                              cols="12"
                              sm="2"
                              md="4"
                              lg="4"
                            >
                              <v-select
                                :items="items"
                                label="Qta"
                                dense
                                outlined
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
          </div>
        </section>

        <section id="02" class="ml-4 pt-15">
          <div class="rectangle2">
            <h2 color="primary">03. Scegli fra le date e orari disponibili</h2>
            <br />
            <h4>Date</h4>
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="8" md="2">
                    <v-text-field
                      v-model="date"
                      :rules="dateRules"
                      background-color="bbb"
                      label="lunedi27"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="8" md="2">
                    <v-text-field
                      v-model="date"
                      background-color="bbb"
                      :rules="dateRules"
                      label="lunedi27"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="8" md="2">
                    <v-text-field
                      v-model="date"
                      background-color="accent"
                      :rules="dateRules"
                      label="lunedi27"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="8" md="2">
                    <v-text-field
                      v-model="date"
                      color="accent"
                      :rules="dateRules"
                      label="lunedi27"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="8" md="2">
                    <v-text-field
                      v-model="date"
                      color="accent"
                      :rules="dateRules"
                      label="lunedi27"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="8" md="2">
                    <v-text-field
                      v-model="date"
                      color="accent"
                      :rules="dateRules"
                      label="lunedi27"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="8" md="2">
                    <v-text-field
                      v-model="date"
                      color="accent"
                      :rules="dateRules"
                      label="lunedi27"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="8" md="2">
                    <v-text-field
                      style="border-color: #92a8d1;"
                      v-model="date"
                      color="accent"
                      :rules="dateRules"
                      label="lunedi27"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>

            <br />
            <h4>Orari</h4>
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="8" md="2">
                    <v-text-field
                      v-model="date"
                      :rules="dateRules"
                      background-color="bbb"
                      label="10:00"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="8" md="2">
                    <v-text-field
                      v-model="date"
                      background-color="bbb"
                      :rules="dateRules"
                      label="10:00"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="8" md="2">
                    <v-text-field
                      v-model="date"
                      background-color="accent"
                      :rules="dateRules"
                      label="10:00"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="8" md="2">
                    <v-text-field
                      v-model="date"
                      color="accent"
                      :rules="dateRules"
                      label="10:00"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="8" md="2">
                    <v-text-field
                      v-model="date"
                      color="accent"
                      :rules="dateRules"
                      label="10:00"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="8" md="2">
                    <v-text-field
                      v-model="date"
                      color="accent"
                      :rules="dateRules"
                      label="10:00"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="8" md="2">
                    <v-text-field
                      v-model="date"
                      color="accent"
                      :rules="dateRules"
                      label="10:00"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="8" md="2">
                    <v-text-field
                      style="border-color: #92a8d1;"
                      v-model="date"
                      color="accent"
                      :rules="dateRules"
                      label="10:00"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </div>
        </section>

        <section id="02" class="ml-4 pt-15">
          <div class="rectangle2">
            <h2 color="primary">04. Dati anagrafici</h2>
            <form>
              <div class="row">
                <v-col cols="8" md="6">
                  <h3>Nome</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="8" md="6">
                  <h3>Cognome</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
              </div>

              <div class="row">
                <v-col cols="8" md="6">
                  <h3>Email</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    :rules="dataEmail"
                    outlined
                  ></v-text-field>
                </v-col>
                &#160;&#160;&#160;&#160;
                <div class="row">
                  <v-col cols="8" md="2" class="mt-3">
                    <h3>Cellulare</h3>
                    <v-select
                      style="border-color: #92a8d1;"
                      label="+355"
                      required
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="8" md="10" class="mt-11">
                    <v-text-field
                      style="border-color: #92a8d1;"
                      v-model="date"
                      color="accent"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                </div>
              </div>

              <div class="row">
                <v-col cols="8" md="6">
                  <h3>Nazionalita</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="8" md="6">
                  <h3>Code di fiscale</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
              </div>

              <div class="row">
                <v-col cols="8" md="6">
                  <h3>Data di nascita</h3>
                  <v-text-field
                    label="DD/MM/YYYY"
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="8" md="6">
                  <h3>Sesso</h3>
                  <v-radio-group v-model="row" row class="mt-6">
                    <v-radio
                      label="M"
                      color="primary"
                      background-color="bbb"
                      value="radio-1"
                    ></v-radio>
                    <v-radio
                      color="primary"
                      label="F"
                      background-color="bbb"
                      value="radio-2"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </div>

              <div class="row">
                <v-col cols="8" md="6">
                  <h3>Comune residenca</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="8" md="6">
                  <h3>Cap</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
              </div>
              <div class="row">
                <v-col cols="8" md="6">
                  <h3>Indirizzo</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
              </div>
            </form>
            <br />
            <v-col>
              <v-checkbox
                v-model="ex4"
                label="Ho preso visione dell’informativa sul trattamento dei miei dati personali e i Termini e Condizioni *(leggi)"
                color="accent"
                value="secondary"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col>
              <v-checkbox
                active
                v-model="ex4"
                label="Ho preso visione dell’informativa sul trattamento dei miei dati personali e do il consenso al loro trattamento da parte di Medispa S.r.l. quale unico Responsabile Esterno del trattamento dei dati sanitari. * (leggi)"
                color="accent"
                value=""
                hide-details
              ></v-checkbox>
            </v-col>
          </div>

          <br /><br />
          <div class="text-start">
            <v-btn
              rounded
              color="bbb"
              x-large
              dark
              style="width:531.82px; height: 100px; border-radius: 50px;"
            >
              AVANTI
            </v-btn>
          </div>
        </section>

        <section id="02" class="ml-4 pt-15">
          <div class="rectangle2">
            <h2 color="primary">05. Tipo di ricevuta</h2>
            <br />
            <h6>A chi dovrà essere intestata la fattura?</h6>
            <br />
            <v-item-group active-class="primary">
              <v-container>
                <v-row>
                  <v-col v-for="n in 1" :key="n" cols="12" md="4">
                    <v-item>
                      <v-card
                        class="d-flex align-center"
                        color="bbb"
                        height="116"
                      >
                        <v-icon
                          color="accent"
                          style="width:20px; height: 23px;margin-left:80px;"
                          >fas fa-users</v-icon
                        >
                        <h2
                          style="color:#0FB7B6; margin-left: 100px; text-size: 24px; width: 118px; weight: 700; font-weight: bold;"
                          class="ml-16 mt-8"
                        >
                          Azienda
                        </h2>
                      </v-card>
                    </v-item>
                  </v-col>

                  <v-col v-for="n in 1" :key="n" cols="12" md="4">
                    <v-item>
                      <v-card
                        class="d-flex align-center"
                        color="accent"
                        height="116"
                      >
                        <v-icon
                          color="white"
                          style="width:20px; height: 23px;margin-left:80px; font-weight: bold;"
                          >far fa-user</v-icon
                        >&nbsp;
                        <h2
                          style="color:white; margin-left: 100px;"
                          class="ml-16 mt-8"
                        >
                          Privato
                        </h2>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
            <br />
            <br />
            <form>
              <div class="row">
                <v-col cols="8" md="6">
                  <h3>Nome</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="8" md="6">
                  <h3>Cognome</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
              </div>
              <div class="row">
                <v-col cols="8" md="6">
                  <h3>Codice Fiscale</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="8" md="6">
                  <h3>Email invio fattura</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
              </div>
              <div class="row">
                <v-col cols="8" md="6">
                  <h3>Indirizzo</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="8" md="6">
                  <h3>Citta</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
              </div>
              <div class="row">
                <v-col cols="8" md="6">
                  <h3>Cap</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="8" md="6">
                  <h3>Provinzia</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
              </div>
              <div class="row">
                <v-col cols="8" md="6">
                  <h3>Nazione</h3>
                  <v-text-field
                    style="border-color: #92a8d1;"
                    v-model="date"
                    color="accent"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
              </div>

              <br /><br />
              <div class="text-start">
                <v-btn
                  rounded
                  color="bbb"
                  x-large
                  dark
                  style="width:531.82px; height: 100px; border-radius: 50px;"
                >
                  VERIFICA
                </v-btn>
              </div>
            </form>
          </div>
        </section>

        <br />
        <br />

        <section id="02" class="ml-4 pt-15">
          <div class="rectangle2">
            <h2 color="primary">06. Metodo di pagamento</h2>
            <br />
            <svg
              width="544"
              height="60"
              viewBox="0 0 544 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11.5" cy="28.5" r="11.5" fill="#0FB7B6" />
              <circle cx="11.5" cy="28.5" r="6.5" fill="white" />
              <path
                d="M51.032 29.624C51.032 27.992 51.4 26.528 52.136 25.232C52.872 23.92 53.872 22.896 55.136 22.16C56.416 21.424 57.832 21.056 59.384 21.056C61.208 21.056 62.8 21.496 64.16 22.376C65.52 23.256 66.512 24.504 67.136 26.12H64.52C64.056 25.112 63.384 24.336 62.504 23.792C61.64 23.248 60.6 22.976 59.384 22.976C58.216 22.976 57.168 23.248 56.24 23.792C55.312 24.336 54.584 25.112 54.056 26.12C53.528 27.112 53.264 28.28 53.264 29.624C53.264 30.952 53.528 32.12 54.056 33.128C54.584 34.12 55.312 34.888 56.24 35.432C57.168 35.976 58.216 36.248 59.384 36.248C60.6 36.248 61.64 35.984 62.504 35.456C63.384 34.912 64.056 34.136 64.52 33.128H67.136C66.512 34.728 65.52 35.968 64.16 36.848C62.8 37.712 61.208 38.144 59.384 38.144C57.832 38.144 56.416 37.784 55.136 37.064C53.872 36.328 52.872 35.312 52.136 34.016C51.4 32.72 51.032 31.256 51.032 29.624ZM69.5711 31.376C69.5711 30.032 69.8431 28.856 70.3871 27.848C70.9311 26.824 71.6751 26.032 72.6191 25.472C73.5791 24.912 74.6431 24.632 75.8111 24.632C76.9631 24.632 77.9631 24.88 78.8111 25.376C79.6591 25.872 80.2911 26.496 80.7071 27.248V24.848H82.9151V38H80.7071V35.552C80.2751 36.32 79.6271 36.96 78.7631 37.472C77.9151 37.968 76.9231 38.216 75.7871 38.216C74.6191 38.216 73.5631 37.928 72.6191 37.352C71.6751 36.776 70.9311 35.968 70.3871 34.928C69.8431 33.888 69.5711 32.704 69.5711 31.376ZM80.7071 31.4C80.7071 30.408 80.5071 29.544 80.1071 28.808C79.7071 28.072 79.1631 27.512 78.4751 27.128C77.8031 26.728 77.0591 26.528 76.2431 26.528C75.4271 26.528 74.6831 26.72 74.0111 27.104C73.3391 27.488 72.8031 28.048 72.4031 28.784C72.0031 29.52 71.8031 30.384 71.8031 31.376C71.8031 32.384 72.0031 33.264 72.4031 34.016C72.8031 34.752 73.3391 35.32 74.0111 35.72C74.6831 36.104 75.4271 36.296 76.2431 36.296C77.0591 36.296 77.8031 36.104 78.4751 35.72C79.1631 35.32 79.7071 34.752 80.1071 34.016C80.5071 33.264 80.7071 32.392 80.7071 31.4ZM88.7898 26.984C89.1738 26.232 89.7178 25.648 90.4218 25.232C91.1418 24.816 92.0138 24.608 93.0378 24.608V26.864H92.4618C90.0138 26.864 88.7898 28.192 88.7898 30.848V38H86.6058V24.848H88.7898V26.984ZM98.2229 26.648V34.4C98.2229 35.04 98.3589 35.496 98.6309 35.768C98.9029 36.024 99.3749 36.152 100.047 36.152H101.655V38H99.6869C98.4709 38 97.5589 37.72 96.9509 37.16C96.3429 36.6 96.0389 35.68 96.0389 34.4V26.648H94.3349V24.848H96.0389V21.536H98.2229V24.848H101.655V26.648H98.2229ZM103.485 31.376C103.485 30.032 103.757 28.856 104.301 27.848C104.845 26.824 105.589 26.032 106.533 25.472C107.493 24.912 108.557 24.632 109.725 24.632C110.877 24.632 111.877 24.88 112.725 25.376C113.573 25.872 114.205 26.496 114.621 27.248V24.848H116.829V38H114.621V35.552C114.189 36.32 113.541 36.96 112.677 37.472C111.829 37.968 110.837 38.216 109.701 38.216C108.533 38.216 107.477 37.928 106.533 37.352C105.589 36.776 104.845 35.968 104.301 34.928C103.757 33.888 103.485 32.704 103.485 31.376ZM114.621 31.4C114.621 30.408 114.421 29.544 114.021 28.808C113.621 28.072 113.077 27.512 112.389 27.128C111.717 26.728 110.973 26.528 110.157 26.528C109.341 26.528 108.597 26.72 107.925 27.104C107.253 27.488 106.717 28.048 106.317 28.784C105.917 29.52 105.717 30.384 105.717 31.376C105.717 32.384 105.917 33.264 106.317 34.016C106.717 34.752 107.253 35.32 107.925 35.72C108.597 36.104 109.341 36.296 110.157 36.296C110.973 36.296 111.717 36.104 112.389 35.72C113.077 35.32 113.621 34.752 114.021 34.016C114.421 33.264 114.621 32.392 114.621 31.4ZM126.102 31.376C126.102 30.032 126.374 28.856 126.918 27.848C127.462 26.824 128.206 26.032 129.15 25.472C130.11 24.912 131.182 24.632 132.366 24.632C133.39 24.632 134.342 24.872 135.222 25.352C136.102 25.816 136.774 26.432 137.238 27.2V20.24H139.446V38H137.238V35.528C136.806 36.312 136.166 36.96 135.318 37.472C134.47 37.968 133.478 38.216 132.342 38.216C131.174 38.216 130.11 37.928 129.15 37.352C128.206 36.776 127.462 35.968 126.918 34.928C126.374 33.888 126.102 32.704 126.102 31.376ZM137.238 31.4C137.238 30.408 137.038 29.544 136.638 28.808C136.238 28.072 135.694 27.512 135.006 27.128C134.334 26.728 133.59 26.528 132.774 26.528C131.958 26.528 131.214 26.72 130.542 27.104C129.87 27.488 129.334 28.048 128.934 28.784C128.534 29.52 128.334 30.384 128.334 31.376C128.334 32.384 128.534 33.264 128.934 34.016C129.334 34.752 129.87 35.32 130.542 35.72C131.214 36.104 131.958 36.296 132.774 36.296C133.59 36.296 134.334 36.104 135.006 35.72C135.694 35.32 136.238 34.752 136.638 34.016C137.038 33.264 137.238 32.392 137.238 31.4ZM144.265 22.712C143.849 22.712 143.497 22.568 143.209 22.28C142.921 21.992 142.777 21.64 142.777 21.224C142.777 20.808 142.921 20.456 143.209 20.168C143.497 19.88 143.849 19.736 144.265 19.736C144.665 19.736 145.001 19.88 145.273 20.168C145.561 20.456 145.705 20.808 145.705 21.224C145.705 21.64 145.561 21.992 145.273 22.28C145.001 22.568 144.665 22.712 144.265 22.712ZM145.321 24.848V38H143.137V24.848H145.321ZM154.626 31.4C154.626 30.04 154.898 28.856 155.442 27.848C155.986 26.824 156.738 26.032 157.698 25.472C158.674 24.912 159.786 24.632 161.034 24.632C162.65 24.632 163.978 25.024 165.018 25.808C166.074 26.592 166.77 27.68 167.106 29.072H164.754C164.53 28.272 164.09 27.64 163.434 27.176C162.794 26.712 161.994 26.48 161.034 26.48C159.786 26.48 158.778 26.912 158.01 27.776C157.242 28.624 156.858 29.832 156.858 31.4C156.858 32.984 157.242 34.208 158.01 35.072C158.778 35.936 159.786 36.368 161.034 36.368C161.994 36.368 162.794 36.144 163.434 35.696C164.074 35.248 164.514 34.608 164.754 33.776H167.106C166.754 35.12 166.05 36.2 164.994 37.016C163.938 37.816 162.618 38.216 161.034 38.216C159.786 38.216 158.674 37.936 157.698 37.376C156.738 36.816 155.986 36.024 155.442 35C154.898 33.976 154.626 32.776 154.626 31.4ZM172.204 26.984C172.588 26.232 173.132 25.648 173.836 25.232C174.556 24.816 175.428 24.608 176.452 24.608V26.864H175.876C173.428 26.864 172.204 28.192 172.204 30.848V38H170.02V24.848H172.204V26.984ZM190.973 30.92C190.973 31.336 190.949 31.776 190.901 32.24H180.389C180.469 33.536 180.909 34.552 181.709 35.288C182.525 36.008 183.509 36.368 184.661 36.368C185.605 36.368 186.389 36.152 187.013 35.72C187.653 35.272 188.101 34.68 188.357 33.944H190.709C190.357 35.208 189.653 36.24 188.597 37.04C187.541 37.824 186.229 38.216 184.661 38.216C183.413 38.216 182.293 37.936 181.301 37.376C180.325 36.816 179.557 36.024 178.997 35C178.437 33.96 178.157 32.76 178.157 31.4C178.157 30.04 178.429 28.848 178.973 27.824C179.517 26.8 180.277 26.016 181.253 25.472C182.245 24.912 183.381 24.632 184.661 24.632C185.909 24.632 187.013 24.904 187.973 25.448C188.933 25.992 189.669 26.744 190.181 27.704C190.709 28.648 190.973 29.72 190.973 30.92ZM188.717 30.464C188.717 29.632 188.533 28.92 188.165 28.328C187.797 27.72 187.293 27.264 186.653 26.96C186.029 26.64 185.333 26.48 184.565 26.48C183.461 26.48 182.517 26.832 181.733 27.536C180.965 28.24 180.525 29.216 180.413 30.464H188.717ZM193.04 31.376C193.04 30.032 193.312 28.856 193.856 27.848C194.4 26.824 195.144 26.032 196.088 25.472C197.048 24.912 198.12 24.632 199.304 24.632C200.328 24.632 201.28 24.872 202.16 25.352C203.04 25.816 203.712 26.432 204.176 27.2V20.24H206.384V38H204.176V35.528C203.744 36.312 203.104 36.96 202.256 37.472C201.408 37.968 200.416 38.216 199.28 38.216C198.112 38.216 197.048 37.928 196.088 37.352C195.144 36.776 194.4 35.968 193.856 34.928C193.312 33.888 193.04 32.704 193.04 31.376ZM204.176 31.4C204.176 30.408 203.976 29.544 203.576 28.808C203.176 28.072 202.632 27.512 201.944 27.128C201.272 26.728 200.528 26.528 199.712 26.528C198.896 26.528 198.152 26.72 197.48 27.104C196.808 27.488 196.272 28.048 195.872 28.784C195.472 29.52 195.272 30.384 195.272 31.376C195.272 32.384 195.472 33.264 195.872 34.016C196.272 34.752 196.808 35.32 197.48 35.72C198.152 36.104 198.896 36.296 199.712 36.296C200.528 36.296 201.272 36.104 201.944 35.72C202.632 35.32 203.176 34.752 203.576 34.016C203.976 33.264 204.176 32.392 204.176 31.4ZM211.203 22.712C210.787 22.712 210.435 22.568 210.147 22.28C209.859 21.992 209.715 21.64 209.715 21.224C209.715 20.808 209.859 20.456 210.147 20.168C210.435 19.88 210.787 19.736 211.203 19.736C211.603 19.736 211.939 19.88 212.211 20.168C212.499 20.456 212.643 20.808 212.643 21.224C212.643 21.64 212.499 21.992 212.211 22.28C211.939 22.568 211.603 22.712 211.203 22.712ZM212.259 24.848V38H210.075V24.848H212.259ZM218.645 26.648V34.4C218.645 35.04 218.781 35.496 219.053 35.768C219.325 36.024 219.797 36.152 220.469 36.152H222.077V38H220.109C218.893 38 217.981 37.72 217.373 37.16C216.765 36.6 216.461 35.68 216.461 34.4V26.648H214.757V24.848H216.461V21.536H218.645V24.848H222.077V26.648H218.645ZM230.459 38.216C229.227 38.216 228.107 37.936 227.099 37.376C226.107 36.816 225.323 36.024 224.747 35C224.187 33.96 223.907 32.76 223.907 31.4C223.907 30.056 224.195 28.872 224.771 27.848C225.363 26.808 226.163 26.016 227.171 25.472C228.179 24.912 229.307 24.632 230.555 24.632C231.803 24.632 232.931 24.912 233.939 25.472C234.947 26.016 235.739 26.8 236.315 27.824C236.907 28.848 237.203 30.04 237.203 31.4C237.203 32.76 236.899 33.96 236.291 35C235.699 36.024 234.891 36.816 233.867 37.376C232.843 37.936 231.707 38.216 230.459 38.216ZM230.459 36.296C231.243 36.296 231.979 36.112 232.667 35.744C233.355 35.376 233.907 34.824 234.323 34.088C234.755 33.352 234.971 32.456 234.971 31.4C234.971 30.344 234.763 29.448 234.347 28.712C233.931 27.976 233.387 27.432 232.715 27.08C232.043 26.712 231.315 26.528 230.531 26.528C229.731 26.528 228.995 26.712 228.323 27.08C227.667 27.432 227.139 27.976 226.739 28.712C226.339 29.448 226.139 30.344 226.139 31.4C226.139 32.472 226.331 33.376 226.715 34.112C227.115 34.848 227.643 35.4 228.299 35.768C228.955 36.12 229.675 36.296 230.459 36.296Z"
                fill="#09425A"
              />
              <g clip-path="url(#clip0)">
                <path
                  d="M491.886 25.0671H493.876L492.881 22.5782L491.886 25.0671Z"
                  fill="#2FABF7"
                />
                <path
                  d="M516.586 22.9336C516.405 22.8447 516.134 22.8447 515.862 22.8447H514.053V24.2669H515.862C516.134 24.2669 516.405 24.267 516.586 24.1781C516.767 24.0892 516.857 23.8225 516.857 23.5558C516.948 23.2003 516.767 23.0225 516.586 22.9336Z"
                  fill="#228FE0"
                />
                <path
                  d="M535.948 20.267V21.3336L535.405 20.267H531.152V21.3336L530.61 20.267H524.819C523.824 20.267 523.01 20.4447 522.286 20.8003V20.267H518.214V20.8003C517.762 20.4447 517.219 20.267 516.495 20.267H501.929L500.933 22.4892L499.938 20.267H495.324V21.3336L494.781 20.267H490.89L489.081 24.4447L487 29.067H489.081H491.614L492.157 27.6447H493.424L493.967 29.067H499.214V28.0003L499.667 29.067H502.29L502.743 28.0003V29.067H515.319V26.7559H515.5C515.681 26.7559 515.681 26.7559 515.681 27.0225V28.9781H522.195V28.4447C522.738 28.7114 523.552 28.9781 524.638 28.9781H527.352L527.895 27.5559H529.162L529.705 28.9781H534.952V27.6447L535.767 28.9781H540.019V20.267H535.948ZM505.367 27.7336H503.829V22.8447L501.657 27.7336H500.3L498.129 22.8447V27.7336H495.052L494.419 26.4003H491.343L490.8 27.8225H489.081L491.795 21.5114H494.057L496.59 27.467V21.5114H499.033L501.024 25.7781L502.833 21.5114H505.367V27.7336ZM511.519 22.8447H507.99V24.0003H511.429V25.2447H507.99V26.4892H511.519V27.8225H506.452V21.5114H511.519V22.8447ZM518.305 25.4225C518.486 25.7781 518.576 26.0447 518.576 26.5781V27.8225H517.038V27.0225C517.038 26.667 517.038 26.1336 516.767 25.7781C516.495 25.5114 516.224 25.5114 515.681 25.5114H514.052V27.8225H512.514V21.5114H515.952C516.767 21.5114 517.31 21.5114 517.762 21.7781C518.214 22.0447 518.486 22.4892 518.486 23.2003C518.486 24.1781 517.852 24.7114 517.4 24.8892C517.852 24.9781 518.124 25.2447 518.305 25.4225ZM521.019 27.7336H519.481V21.4225H521.019V27.7336ZM538.843 27.7336H536.671L533.776 23.0225V27.7336H530.7L530.157 26.4003H526.99L526.448 27.8225H524.729C524.005 27.8225 523.1 27.6447 522.557 27.1114C522.014 26.5781 521.743 25.867 521.743 24.7114C521.743 23.8225 521.924 22.9336 522.557 22.2225C523.01 21.6892 523.824 21.5114 524.819 21.5114H526.267V22.8447H524.819C524.276 22.8447 524.005 22.9336 523.643 23.2003C523.371 23.467 523.19 24.0003 523.19 24.6225C523.19 25.3336 523.281 25.7781 523.643 26.1336C523.914 26.4003 524.276 26.4892 524.729 26.4892H525.362L527.443 21.6003H529.705L532.238 27.5559V21.6003H534.5L537.124 25.9559V21.6003H538.662V27.7336H538.843Z"
                  fill="#0571C1"
                />
                <path
                  d="M527.533 25.0671H529.614L528.619 22.5782L527.533 25.0671Z"
                  fill="#228FE0"
                />
                <path
                  d="M512.152 37.8672V32.8005L509.8 35.2894L512.152 37.8672Z"
                  fill="#228FE0"
                />
                <path
                  d="M502.472 33.4222V34.5778H505.819V35.8222H502.472V37.1556H506.181L507.9 35.2889L506.272 33.4222H502.472Z"
                  fill="#2FABF7"
                />
                <path
                  d="M515.59 33.4222H513.69V35.0222H515.681C516.224 35.0222 516.586 34.7556 516.586 34.2222C516.495 33.6889 516.133 33.4222 515.59 33.4222Z"
                  fill="#228FE0"
                />
                <path
                  d="M543.548 34.9326V30.9326H542.462H539.748C538.933 30.9326 538.3 31.1104 537.848 31.466V30.9326H533.686C533.052 30.9326 532.238 31.1104 531.876 31.466V30.9326H524.548V31.466C524.005 31.0215 523.01 30.9326 522.557 30.9326H517.671V31.466C517.219 31.0215 516.133 30.9326 515.59 30.9326H510.162L508.895 32.266L507.719 30.9326H499.576V39.6437H507.538L508.805 38.3104L509.981 39.6437H514.867V37.5993H515.5C516.133 37.5993 516.948 37.5993 517.581 37.3326V39.7326H521.652V37.4215H521.833C522.105 37.4215 522.105 37.4215 522.105 37.6882V39.7326H534.41C535.224 39.7326 536.038 39.5548 536.49 39.1993V39.7326H540.381C541.195 39.7326 542.009 39.6437 542.552 39.2882C543.457 38.7549 544 37.7771 544 36.6215C544 35.9993 543.819 35.3771 543.548 34.9326ZM515.5 36.3548H513.69V38.4882H510.795L508.986 36.4437L507.086 38.4882H501.114V32.1771H507.176L508.986 34.2215L510.886 32.1771H515.681C516.857 32.1771 518.214 32.5326 518.214 34.2215C518.124 35.9993 516.857 36.3548 515.5 36.3548ZM524.548 35.9993C524.729 36.266 524.819 36.6215 524.819 37.1548V38.3993H523.281V37.5993C523.281 37.2437 523.281 36.6215 523.01 36.3548C522.829 36.0882 522.467 36.0882 521.924 36.0882H520.295V38.3993H518.757V32.0882H522.195C522.919 32.0882 523.552 32.0882 524.005 32.3548C524.457 32.6215 524.819 33.066 524.819 33.7771C524.819 34.7548 524.186 35.2882 523.733 35.466C524.186 35.6437 524.457 35.8215 524.548 35.9993ZM530.79 33.4215H527.262V34.5771H530.7V35.8215H527.262V37.066H530.79V38.3993H525.724V32.0882H530.79V33.4215ZM534.59 38.3993H531.695V37.066H534.59C534.862 37.066 535.043 37.066 535.224 36.8882C535.314 36.7993 535.405 36.6215 535.405 36.4437C535.405 36.266 535.314 36.0882 535.224 35.9993C535.133 35.9104 534.952 35.8215 534.681 35.8215C533.233 35.7326 531.514 35.8215 531.514 33.866C531.514 32.9771 532.057 31.9993 533.686 31.9993H536.671V33.5104H533.867C533.595 33.5104 533.414 33.5104 533.233 33.5993C533.052 33.6882 533.052 33.866 533.052 34.0437C533.052 34.3104 533.233 34.3993 533.414 34.4882C533.595 34.5771 533.776 34.5771 533.957 34.5771H534.771C535.586 34.5771 536.129 34.7548 536.49 35.1104C536.762 35.3771 536.943 35.8215 536.943 36.4437C536.943 37.7771 536.129 38.3993 534.59 38.3993ZM542.371 37.7771C542.01 38.1326 541.376 38.3993 540.471 38.3993H537.576V37.066H540.471C540.743 37.066 540.924 37.066 541.105 36.8882C541.195 36.7993 541.286 36.6215 541.286 36.4437C541.286 36.266 541.195 36.0882 541.105 35.9993C541.014 35.9104 540.833 35.8215 540.562 35.8215C539.114 35.7326 537.395 35.8215 537.395 33.866C537.395 32.9771 537.938 31.9993 539.567 31.9993H542.552V33.5104H539.838C539.567 33.5104 539.386 33.5104 539.205 33.5993C539.024 33.6882 539.024 33.866 539.024 34.0437C539.024 34.3104 539.114 34.3993 539.386 34.4882C539.567 34.5771 539.748 34.5771 539.929 34.5771H540.743C541.557 34.5771 542.1 34.7548 542.462 35.1104C542.552 35.1104 542.552 35.1993 542.552 35.1993C542.824 35.5548 542.914 35.9993 542.914 36.4437C542.914 36.9771 542.733 37.4215 542.371 37.7771Z"
                  fill="#0571C1"
                />
                <path
                  d="M522.919 33.6004C522.738 33.5115 522.467 33.5115 522.195 33.5115H520.386V34.9337H522.195C522.467 34.9337 522.738 34.9337 522.919 34.8448C523.1 34.7559 523.19 34.4893 523.19 34.2226C523.281 33.867 523.1 33.6893 522.919 33.6004Z"
                  fill="#228FE0"
                />
                <path
                  d="M516.586 22.9334C516.405 22.8445 516.134 22.8445 515.862 22.8445H514.053V24.2667H515.862C516.134 24.2667 516.405 24.2667 516.586 24.1778C516.767 24.0889 516.857 23.8223 516.857 23.5556C516.948 23.2 516.767 23.0223 516.586 22.9334Z"
                  fill="#228FE0"
                />
                <path
                  d="M527.533 25.0671H529.614L528.619 22.5782L527.533 25.0671Z"
                  fill="#228FE0"
                />
                <path
                  d="M512.152 37.8672V32.8005L509.8 35.2894L512.152 37.8672Z"
                  fill="#228FE0"
                />
                <path
                  d="M515.59 33.4222H513.69V35.0222H515.681C516.224 35.0222 516.586 34.7556 516.586 34.2222C516.495 33.6889 516.133 33.4222 515.59 33.4222Z"
                  fill="#228FE0"
                />
                <path
                  d="M522.919 33.6004C522.738 33.5115 522.467 33.5115 522.195 33.5115H520.386V34.9337H522.195C522.467 34.9337 522.738 34.9337 522.919 34.8448C523.1 34.7559 523.19 34.4893 523.19 34.2226C523.281 33.867 523.1 33.6893 522.919 33.6004Z"
                  fill="#228FE0"
                />
                <path
                  d="M514.957 38.2228L513.69 36.8895V38.4006H510.705L508.895 36.3562L506.905 38.4006H500.933V32.1784H506.995L508.895 34.2228L509.8 33.1562L507.538 30.934H499.576V39.6451H507.538L508.895 38.3117L510.071 39.6451H514.957V38.2228Z"
                  fill="#2FABF7"
                />
                <path
                  d="M505.548 28.9781L504.371 27.7336H503.829V27.2003L502.471 25.867L501.567 27.7336H500.3L498.129 22.8447V27.7336H495.052L494.419 26.4003H491.343L490.71 27.7336H489.081L491.795 21.5114H494.057L496.59 27.467V21.5114H497.948L496.681 20.267H495.324V21.3336L494.871 20.267H490.89L489.081 24.4447L487 28.9781H489.081H491.705L492.248 27.6447H493.514L494.148 28.9781H499.214V27.9114L499.667 28.9781H502.29L502.743 27.9114V28.9781H505.548Z"
                  fill="#2FABF7"
                />
                <path
                  d="M501.386 24.8899L499.938 23.4677L501.024 25.7788L501.386 24.8899Z"
                  fill="#2FABF7"
                />
                <path
                  d="M542.552 39.1997C543.366 38.6664 543.909 37.7775 544 36.7997L542.733 35.5553C542.824 35.8219 542.914 36.0886 542.914 36.4442C542.914 36.9775 542.733 37.4219 542.371 37.7775C542.009 38.1331 541.376 38.3997 540.471 38.3997H537.576V37.0664H540.471C540.743 37.0664 540.924 37.0664 541.105 36.8886C541.195 36.7997 541.286 36.6219 541.286 36.4442C541.286 36.2664 541.195 36.0886 541.105 35.9997C541.014 35.9108 540.833 35.8219 540.562 35.8219C539.114 35.7331 537.395 35.8219 537.395 33.8664C537.395 32.9775 537.938 32.1775 539.295 31.9997L538.3 31.0219C538.119 31.1108 538.028 31.1997 537.938 31.1997V30.6664H533.776C533.143 30.6664 532.328 30.8442 531.966 31.1997V30.6664H524.547V31.1997C524.005 30.7553 523.009 30.6664 522.557 30.6664H517.671V31.1997C517.219 30.7553 516.133 30.6664 515.59 30.6664H510.162L508.895 31.9997L507.719 30.6664H506.724L509.438 33.3331L510.795 31.9108H515.59C516.766 31.9108 518.124 32.2664 518.124 33.9553C518.124 35.7331 516.857 36.0886 515.5 36.0886H513.69V37.4219L515.047 38.7553V37.4219H515.5C516.133 37.4219 516.947 37.4219 517.581 37.1553V39.5553H521.652V37.2442H521.833C522.105 37.2442 522.105 37.2442 522.105 37.5108V39.5553H534.409C535.224 39.5553 536.038 39.3775 536.49 39.0219V39.5553H540.381C541.105 39.6442 541.919 39.5553 542.552 39.1997ZM524.547 35.9997C524.728 36.2664 524.819 36.6219 524.819 37.1553V38.3997H523.281V37.5997C523.281 37.2442 523.281 36.6219 523.009 36.3553C522.828 36.0886 522.466 36.0886 521.924 36.0886H520.295V38.3997H518.757V32.0886H522.195C522.919 32.0886 523.552 32.0886 524.005 32.3553C524.457 32.6219 524.819 33.0664 524.819 33.7775C524.819 34.7553 524.186 35.2886 523.733 35.4664C524.186 35.6442 524.457 35.8219 524.547 35.9997ZM530.79 33.4219H527.262V34.5775H530.7V35.8219H527.262V37.0664H530.79V38.3997H525.724V32.0886H530.79V33.4219ZM534.59 38.3997H531.695V37.0664H534.59C534.862 37.0664 535.043 37.0664 535.224 36.8886C535.314 36.7997 535.405 36.6219 535.405 36.4442C535.405 36.2664 535.314 36.0886 535.224 35.9997C535.133 35.9108 534.952 35.8219 534.681 35.8219C533.233 35.7331 531.514 35.8219 531.514 33.8664C531.514 32.9775 532.057 31.9997 533.686 31.9997H536.671V33.5108H533.866C533.595 33.5108 533.414 33.5108 533.233 33.5997C533.052 33.6886 533.052 33.8664 533.052 34.0442C533.052 34.3108 533.233 34.3997 533.414 34.4886C533.595 34.5775 533.776 34.5775 533.957 34.5775H534.771C535.586 34.5775 536.128 34.7553 536.49 35.1108C536.762 35.3775 536.943 35.8219 536.943 36.4442C536.943 37.7775 536.128 38.3997 534.59 38.3997Z"
                  fill="#228FE0"
                />
                <path
                  d="M538.933 34.0435C538.933 34.3101 539.023 34.399 539.295 34.4879C539.475 34.5768 539.656 34.5768 539.837 34.5768H540.652C541.195 34.5768 541.556 34.6657 541.918 34.8435L540.561 33.5101H539.747C539.475 33.5101 539.295 33.5101 539.114 33.599C539.023 33.6879 538.933 33.8657 538.933 34.0435Z"
                  fill="#228FE0"
                />
                <path
                  d="M535.767 28.7106L535.948 28.9772H536.038L535.767 28.7106Z"
                  fill="#228FE0"
                />
                <path
                  d="M530.79 23.8217L532.328 27.4661V25.3328L530.79 23.8217Z"
                  fill="#228FE0"
                />
                <path
                  d="M515.319 26.7549H515.5C515.681 26.7549 515.681 26.7549 515.681 27.0215V28.9771H522.195V28.4437C522.738 28.7104 523.552 28.9771 524.638 28.9771H527.352L527.895 27.5549H529.162L529.705 28.9771H534.952V28.0882L533.686 26.8437V27.8215H530.609L530.157 26.3993H526.99L526.448 27.8215H524.728C524.005 27.8215 523.1 27.6437 522.557 27.1104C522.014 26.5771 521.743 25.866 521.743 24.7104C521.743 23.8215 521.924 22.9326 522.557 22.2215C523.009 21.6882 523.824 21.5104 524.819 21.5104H526.267V22.8437H524.819C524.276 22.8437 524.005 22.9326 523.643 23.1993C523.371 23.466 523.19 23.9993 523.19 24.6215C523.19 25.3326 523.281 25.7771 523.643 26.1326C523.914 26.3993 524.276 26.4882 524.728 26.4882H525.362L527.443 21.5993H528.348L527.081 20.3549H524.728C523.733 20.3549 522.919 20.5326 522.195 20.8882V20.3549H518.214V20.8882C517.762 20.5326 517.219 20.3549 516.495 20.3549H501.928L500.933 22.5771L499.938 20.3549H495.957L497.224 21.5993H499.033L500.571 24.8882L501.114 25.4215L502.743 21.5104H505.276V27.8215H503.738V22.9326L502.2 26.4882L504.824 29.066H515.228L515.319 26.7549ZM519.481 21.5104H521.019V27.8215H519.481V21.5104ZM511.519 22.8437H507.99V23.9993H511.428V25.2437H507.99V26.4882H511.519V27.8215H506.452V21.5104H511.519V22.8437ZM514.052 27.7326H512.514V21.4215H515.952C516.767 21.4215 517.309 21.4215 517.762 21.6882C518.214 21.9549 518.486 22.3993 518.486 23.1104C518.486 24.0882 517.852 24.6215 517.4 24.7993C517.762 24.8882 518.033 25.1549 518.124 25.3326C518.305 25.6882 518.395 25.9549 518.395 26.4882V27.7326H516.857V26.9326C516.857 26.5771 516.857 26.0437 516.586 25.6882C516.495 25.5104 516.224 25.5104 515.681 25.5104H514.052V27.7326Z"
                  fill="#228FE0"
                />
              </g>
              <g clip-path="url(#clip1)">
                <path
                  d="M352.489 30.9999C352.489 38.9399 346.337 45.3735 338.745 45.3735C331.153 45.3735 325 38.9385 325 30.9999C325 23.0612 331.154 16.6262 338.745 16.6262C346.335 16.6262 352.489 23.0612 352.489 30.9999Z"
                  fill="#E2574C"
                />
                <path
                  d="M355.251 16.6262C352.169 16.6262 349.331 17.7 347.038 19.4924L347.049 19.4938C347.5 19.9494 347.997 20.2701 348.381 20.7946L345.521 20.842C345.073 21.315 344.665 21.8295 344.28 22.3643H349.323C349.706 22.8457 350.061 23.2641 350.383 23.7959H343.365C343.108 24.2587 342.87 24.7345 342.663 25.2289H351.182C351.404 25.7218 351.604 26.0942 351.773 26.616H342.158C342.006 27.112 341.875 27.6193 341.776 28.1367H352.176C352.277 28.634 352.356 29.0939 352.409 29.5626H341.57C341.524 30.0355 341.501 30.5156 341.501 31H352.488C352.488 31.5089 352.453 31.9803 352.404 32.4374H341.57C341.616 32.9247 341.685 33.4033 341.776 33.8749H352.159C352.052 34.3405 351.928 34.8091 351.773 35.2949H342.127C342.272 35.7865 342.45 36.2637 342.644 36.7294H351.182C350.945 37.2526 350.677 37.6708 350.381 38.161H343.341C343.619 38.664 343.925 39.1441 344.258 39.6041L349.323 39.6831C348.891 40.2249 348.337 40.5512 347.832 41.0256C347.86 41.0486 347.025 41.0227 345.382 40.9955C347.882 43.692 351.375 45.3736 355.251 45.3736C362.845 45.3736 369 38.9385 369 31C369 23.0615 362.846 16.6262 355.251 16.6262Z"
                  fill="#F4B459"
                />
              </g>
              <g clip-path="url(#clip2)">
                <path
                  d="M420 38.6189L423.048 21.4761H427.81L424.857 38.6189H420Z"
                  fill="#3C58BF"
                />
                <path
                  d="M420 38.6189L423.905 21.4761H427.81L424.857 38.6189H420Z"
                  fill="#293688"
                />
                <path
                  d="M442.095 21.6673C441.142 21.2863 439.619 20.9054 437.714 20.9054C432.952 20.9054 429.523 23.2863 429.523 26.7149C429.523 29.2863 431.904 30.6197 433.809 31.4768C435.714 32.334 436.285 32.9054 436.285 33.6673C436.285 34.8102 434.762 35.3816 433.428 35.3816C431.523 35.3816 430.476 35.0959 428.857 34.4292L428.19 34.1435L427.523 38.0483C428.666 38.5244 430.762 39.0006 432.952 39.0006C438 39.0006 441.333 36.6197 441.333 33.0006C441.333 31.0006 440.095 29.4768 437.238 28.2387C435.523 27.3816 434.476 26.9054 434.476 26.0483C434.476 25.2863 435.333 24.5244 437.238 24.5244C438.857 24.5244 440 24.8102 440.857 25.1911L441.333 25.3816L442.095 21.6673Z"
                  fill="#3C58BF"
                />
                <path
                  d="M442.095 21.6673C441.142 21.2863 439.619 20.9054 437.714 20.9054C432.952 20.9054 430.381 23.2863 430.381 26.7149C430.381 29.2863 431.904 30.6197 433.809 31.4768C435.714 32.334 436.285 32.9054 436.285 33.6673C436.285 34.8102 434.762 35.3816 433.428 35.3816C431.523 35.3816 430.476 35.0959 428.857 34.4292L428.19 34.1435L427.523 38.0483C428.666 38.5244 430.762 39.0006 432.952 39.0006C438 39.0006 441.333 36.6197 441.333 33.0006C441.333 31.0006 440.095 29.4768 437.238 28.2387C435.523 27.3816 434.476 26.9054 434.476 26.0483C434.476 25.2863 435.333 24.5244 437.238 24.5244C438.857 24.5244 440 24.8102 440.857 25.1911L441.333 25.3816L442.095 21.6673Z"
                  fill="#293688"
                />
                <path
                  d="M450.286 21.4761C449.143 21.4761 448.286 21.5713 447.81 22.7142L440.667 38.6189H445.81L446.762 35.7618H452.857L453.429 38.6189H458L454 21.4761H450.286ZM448.096 32.9046C448.381 32.0475 450 27.857 450 27.857C450 27.857 450.381 26.8094 450.667 26.1427L450.953 27.7618C450.953 27.7618 451.905 32.0475 452.096 32.9999H448.096V32.9046Z"
                  fill="#3C58BF"
                />
                <path
                  d="M451.429 21.4761C450.286 21.4761 449.429 21.5713 448.953 22.7142L440.667 38.6189H445.81L446.762 35.7618H452.857L453.429 38.6189H458L454 21.4761H451.429ZM448.096 32.9046C448.477 31.9523 450 27.857 450 27.857C450 27.857 450.381 26.8094 450.667 26.1427L450.953 27.7618C450.953 27.7618 451.905 32.0475 452.096 32.9999H448.096V32.9046Z"
                  fill="#293688"
                />
                <path
                  d="M411.239 33.4762L410.762 31C409.905 28.1428 407.143 25 404.096 23.4762L408.381 38.7143H413.524L421.239 21.5714H416.096L411.239 33.4762Z"
                  fill="#3C58BF"
                />
                <path
                  d="M411.239 33.4762L410.762 31C409.905 28.1428 407.143 25 404.096 23.4762L408.381 38.7143H413.524L421.239 21.5714H417.048L411.239 33.4762Z"
                  fill="#293688"
                />
                <path
                  d="M398 21.4761L398.857 21.6666C404.952 23.0951 409.143 26.7142 410.762 30.9999L409.048 22.9046C408.762 21.7618 407.905 21.4761 406.857 21.4761H398Z"
                  fill="#FFBC00"
                />
                <path
                  d="M398 21.4761C404.095 22.9046 409.143 26.6189 410.762 30.9046L409.143 24.1427C408.857 22.9999 407.905 22.3332 406.857 22.3332L398 21.4761Z"
                  fill="#F7981D"
                />
                <path
                  d="M398 21.4761C404.095 22.9046 409.143 26.6189 410.762 30.9046L409.619 27.1904C409.333 26.0475 408.952 24.9046 407.619 24.4285L398 21.4761Z"
                  fill="#ED7C00"
                />
                <path
                  d="M416 32.9043L412.762 29.6662L411.238 33.2853L410.857 30.9043C410 28.0472 407.238 24.9043 404.19 23.3805L408.476 38.6186H413.619L416 32.9043Z"
                  fill="#051244"
                />
                <path
                  d="M424.857 38.6191L420.762 34.4286L420 38.6191H424.857Z"
                  fill="#051244"
                />
                <path
                  d="M435.809 32.7136C436.19 33.0946 436.381 33.3803 436.285 33.7612C436.285 34.9041 434.762 35.4755 433.428 35.4755C431.523 35.4755 430.476 35.1898 428.857 34.5231L428.19 34.2374L427.523 38.1422C428.666 38.6184 430.762 39.0946 432.952 39.0946C436 39.0946 438.476 38.2374 439.904 36.7136L435.809 32.7136Z"
                  fill="#051244"
                />
                <path
                  d="M441.333 38.6184H445.809L446.762 35.7613H452.857L453.428 38.6184H458L456.381 31.666L450.666 26.1422L450.952 27.666C450.952 27.666 451.904 31.9517 452.095 32.9041H448.095C448.476 31.9517 450 27.8565 450 27.8565C450 27.8565 450.381 26.8089 450.666 26.1422"
                  fill="#051244"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="57"
                    height="56"
                    fill="white"
                    transform="translate(487 2)"
                  />
                </clipPath>
                <clipPath id="clip1">
                  <rect
                    width="44"
                    height="46"
                    fill="white"
                    transform="translate(325 8)"
                  />
                </clipPath>
                <clipPath id="clip2">
                  <rect
                    width="60"
                    height="60"
                    fill="white"
                    transform="translate(398)"
                  />
                </clipPath>
              </defs>
            </svg>

            <br />
            <br />

            <v-card color="bbb" outlined>
              <v-list-item three-line>
                <v-list-item-content color="accent">
                  <br /><br />
                  <v-form ref="form" v-model="valid" lazy-validation class="">
                    <br /><br />
                    <h3 style="margin-left: 149px;">Name</h3>
                    <v-text-field
                      color="accent"
                      :rules="nameRules"
                      outlined
                      required
                      style="width:790px; margin-left: 149px;"
                    ></v-text-field>
                    <div class="row" style="margin-left: 135px;">
                      <v-col cols="8" md="5">
                        <h3>Data di scandeza</h3>
                        <v-text-field
                          style="border-color: #92a8d1;"
                          v-model="date"
                          color="accent"
                          required
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="8" md="5">
                        <h3>CVC/CVV</h3>
                        <v-text-field
                          style="border-color: #92a8d1;"
                          v-model="date"
                          color="accent"
                          required
                          outlined
                        ></v-text-field>
                      </v-col>
                    </div>
                    <h3 style="margin-left: 149px;">Nome sualla carta</h3>
                    <v-text-field
                      color="accent"
                      :rules="nameRules"
                      outlined
                      required
                      style="width:790px; margin-left: 149px;"
                    ></v-text-field>
                  </v-form>
                </v-list-item-content>
                <br />
                <br />
              </v-list-item>
            </v-card>
            <br />
            <v-radio-group v-model="column" column>
              <v-radio
                label="PayPal"
                style="border-color: #16C5B3;"
                color="accent"
                value="radio-1"
              ></v-radio>
              <br />
              <v-radio
                label="GooglePay"
                style="border-color: #16C5B3;"
                color="accent"
                value="radio-2"
              ></v-radio>
            </v-radio-group>

            <br />
            <v-col>
              <v-checkbox
                v-model="column"
                column
                label="Ho preso visione dell’informativa sul trattamento dei miei dati personali e i Termini e Condizioni *(leggi)"
                color="accent"
                value="secondary"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col>
              <v-checkbox
                active
                v-model="ex4"
                label="Ho preso visione dell’informativa sul trattamento dei miei dati personali e do il consenso al loro trattamento da parte di Medispa S.r.l. quale unico Responsabile Esterno del trattamento dei dati sanitari. * (leggi)"
                color="accent"
                value=""
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col>
              <v-checkbox
                active
                v-model="ex4"
                label="Ho preso visione dell’informativa sul trattamento dei miei dati personali e do il consenso al loro trattamento da parte di Medispa S.r.l. quale unico Responsabile Esterno del trattamento dei dati sanitari. * (leggi)"
                color="accent"
                value=""
                hide-details
              ></v-checkbox>
            </v-col>

            <br />
            <div class="text-start">
              <v-btn
                rounded
                color="accent"
                x-large
                dark
                style="width:531.82px; height: 100px; border-radius: 50px;"
              >
                CONFERMA E PAGA
              </v-btn>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data: () => ({
    valid: false,
    date: "",
    dateRules: [
      (v) => !!v || "Date is required",
      (v) => v.length <= 10 || "Date must be ok",
    ],
    dataEmail: [
      (v) =>
        !!v ||
        "La conferma verrà invita a questa mail. Si richiede di utilizzare la mail propria personale non mail aziendali",
    ],
  }),
};
</script>

<style lang="scss" scoped>
.divider {
  display: flex;
  justify-content: flex-end;
}
h2 {
  width: 567px;
  height: 54px;
  align-items: center;
}

#cd {
  background: #f0f4f5;
}
</style>
