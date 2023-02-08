<template>
    <div>
        <content-template title="" subtitle="Tipos de tren <br/> motriz mas comunes">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="space-between">
                        <v-col cols="2">
                            <v-img :src="user" :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="10" v-if="count === 0">
                            <div class="border-box-quiz nimate__animated animate__backInLeft" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card height="130" class="overflow-auto rounded-lg ma-1" >
                                    <v-card-text>
                                        Vamos a revisar rápidamente una manera en la que podemos clasificar los diferentes tipos de tren 
                                        motriz de acuerdo al nivel de emisiones de gases de efecto invernadero que generan.
                                        Los autos que ocupan motores a gasolina o diesel serían aquéllos que más emisiones generan. 
                                        Los vehículos híbridos, que combinan motores de combustión interna con motores eléctricos, 
                                        serían un punto medio. Finalmente los vehículos eléctricos a baterías así como los vehículos 
                                        de celdas de combustible (FCEV) o aquellos que utilizan hidrógeno en un motor de combustión 
                                        interna (H-ICE) se consideran los más limpios ya que no generan emisiones contaminantes.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                        <v-col cols="8" v-if="count >= 1">
                            <div class="border-box-quiz nimate__animated animate__backInLeft" v-if="count >= 1 && count <= 7"
                            :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card height="130" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text>
                                        A continuación vamos a analizar los componentes principales que conforman cada tipo de tren motriz y la función que desempeñan.
                                    
                                        Vamos a iniciar con los vehículos con motor a combustión interna también llamados ICE.

                                        En ellos, el motor a combustión es fundamental y es quien genera toda la energía y la fuerza para el 
                                        movimiento del vehículo. No cuentan con un motor eléctrico que pueda propulsar al automóvil y 
                                        la batería presente es una de bajo voltaje que suministra corriente eléctrica a los diferentes sistemas 
                                        eléctricos.

                                        Este tipo de unidades no cuenta con una batería de alto voltaje (también conocida como batería de tracción). Al no haber motores eléctricos que puedan mover al auto, no tienen una autonomía eléctrica.

                                        Sus niveles de emisiones contaminantes se consideran altas ya que están quemando combustibles fósiles para generar el movimiento del vehículo.

                                        La recarga de este tipo de vehículos es muy rápida. En unos cuantos minutos puedes llenar el tanque de combustible en una estación de servicio.
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="border-box-quiz nimate__animated animate__backInLeft" v-if="count >= 8 && count <=14"
                            :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card height="130" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text>
                                        Los vehículos semihíbridos (también conocidos como MHEV o mild hybrid), son el primer paso hacia 
                                        la electrificación.  Estos cuentan ya con un motor eléctrico pequeño y de baja potencia. Si bien no 
                                        se pueden mover únicamente con la fuerza de este motor eléctrico, si se tiene un pequeño beneficio 
                                        por la aportación de energía que hace al sistema. Es decir, el motor eléctrico es una asistencia para 
                                        el motor de gasolina bajo ciertas condiciones. De tal manera que podríamos concluir que el motor de 
                                        gasolina es primordial mientras que el motor eléctrico es simplemente un sistema de asistencia.

                                        Los sistemas semihíbridos suelen ocupar baterías de bajo voltaje (12 a 48 voltios dependiendo del fabricante) y no cuentan con baterías de tracción de alto voltaje.

                                        Al no poder moverse únicamente con el motor eléctrico, no se considera que tengan autonomía eléctrica.

                                        Sus emisiones contaminantes son ligeramente más bajas que en un vehiculo tradicional pero aún se consideran elevadas.

                                        Finalmente, el tiempo de recarga es corto ya que en unos minutos se puede cargar combustible y llenar el tanque.
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="border-box-quiz nimate__animated animate__backInLeft" v-if="count >= 15 && count <=21"
                            :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card height="130" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text>
                                        Vehículos híbridos fuertes (también conocidos como Full HEV o híbridos autorecargables). 
                                        Estos son con seguridad los híbridos más conocidos y más comercializados a nivel mundial. 
                                        Se trata de sistemas que ya cuentan con motor o motores eléctricos suficientemente fuertes 
                                        para mover al vehículo y que almacenan la energía eléctrica en baterías de tracción de alto voltaje.

                                        Las baterías de tracción son de alto voltaje pero tienen una capacidad de carga relativamente 
                                        pequeña (0.9 a 2.5 kilowatthora) y que permiten un movimiento 100% eléctrico por distancias 
                                        limitadas (normalmente de 3 a 5 km).

                                        Es debido a estas limitantes al movimiento 100% eléctrico que la mayor parte del tiempo operan en 
                                        un ciclo combinado eléctrico-gasolina. Gracias a sus motores eléctricos, las emisiones contaminantes 
                                        son mucho más reducidas que las de los ICE o MHEV.

                                        Debido a que las baterías de tracción de estos vehículos se cargan durante el rodamiento del 
                                        vehículo o con el motor de combustible, no deben (ni pueden) conectarse a una fuente de corriente 
                                        eléctrica. De esta manera el usuario únicamente debe llenar el tanque de combustible, un proceso 
                                        que lleva muy poco tiempo.
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="border-box-quiz nimate__animated animate__backInLeft" v-if="count>=22 && count <=28"
                            :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card height="130" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text>
                                        En años recientes se ha incrementado el número de vehículos híbridos enchufables que se 
                                        ofrecen en diferentes marcas. Este tipo de autos, también conocidos como PHEV o plug-in 
                                        hybrid cuentan con uno o varios motores eléctricos de alta potencia que son capaces de mover 
                                        al vehículo de manera 100% eléctrica. La diferencia principal con un Full Hybrid o híbrido 
                                        autorecargable es que en los PHEV las baterías de tracción suelen tener mayor capacidad 
                                        (de 9 a 24 kilo watt hora o incluso más grandes en algunos casos).

                                        Gracias a estas baterías de gran capacidad, pueden tener la capacidad de recorrer largas 
                                        distancias de manera 100% eléctrico (entre 24 a 80 kilómetros de autonomía es algo normal y 
                                        hay algunos que ofrecen hasta 100 km). Esto implica que durante el uso cotidiano en ciudad, 
                                        la mayor parte del tiempo se mueven de forma 100% eléctrica, pero cuando es necesario pueden 
                                        recurrir al motor de combustión para extender sus capacidades y funcionar en ciclo combinado 
                                        eléctrico-gasolina por distancias mucho más largas.

                                        Este tipo de vehículos pueden tener emisiones contaminantes de medias a muy bajas dependiendo 
                                        del uso que se haga de ellos y de los hábitos de carga del usuario.

                                        En cuanto al tiempo de recarga podemos decir que el abastecimiento de combustible es muy rápido 
                                        y que el tiempo en que se cargan las baterías es medio. Este último puede variar mucho dependiendo 
                                        de la capacidad de la batería y el tipo de cargador utilizado. Normalmente se aprovechan los 
                                        tiempos en los que el auto no está siendo utilizado para la recarga de las baterías.
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="border-box-quiz nimate__animated animate__backInLeft" v-if="count>=29 && count <=35"
                            :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card height="130" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text>
                                        Finalmente hablaremos de los vehículos eléctricos a batería también conocidos como BEV. 
                                        En este tipo de unidades, el motor de combustible desaparece por completo y es el motor 
                                        o los motores eléctricos quienes son responsables del movimiento del auto. Las baterías 
                                        de tracción son de alto voltaje y normalmente son de gran capacidad; desde 20 hasta 100 
                                        kilo watt hora es habitual.

                                        Los BEV son los vehículos más ecológicos en el sentido de que no generan emisiones de gases de efecto invernadero.

                                        La autonomía eléctrica suele ser bastante grande y dependerá de varios factores como pueden ser: 
                                        la capacidad de la batería, las condiciones de operación (velocidad, tráfico, pendientes, 
                                        temperatura ambiente, etc.) y el peso vehícular. Es normal encontrar vehículos eléctricos con 
                                        autonomías desde los 100 hasta los 1000 km.

                                        El tiempo de recarga de estos autos es uno de los obstáculos más grandes que se presentan. 
                                        Dependiendo de varios factores como pueden ser la capacidad de la batería, la potencia del 
                                        cargador utilizado, la temperatura ambiente y la temperatura de funcionamiento del sistema, 
                                        se puede tardar desde unos 30 minutos hasta más de 60 horas para abastecer carga a las baterías.

                                        Es por esto que resulta sumamente importante poder guiar a los compradores de este tipo de unidad 
                                        a una solución satisfactoria de acuerdo a sus necesidades.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                        <v-col cols="2" align="end">
                            <v-img :src="Mcombustion" :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count >= 1 && count <= 7"></v-img>
                            <v-img :src="Mcombustion" :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count >= 8 && count <=14"></v-img>
                            <v-img :src="Mhibrido" :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count >= 15 && count <=21"></v-img>
                            <v-img :src="Mcombustion" :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count>=22 && count <=28"></v-img>
                            <v-img :src="Mbateria" :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count>=29 && count <=35"></v-img>
                            <v-img :src="Mcombustion" :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count>=36 && count<=42"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mx-5 animate__animated animate__backInLeft" :class="{'mt-4': windowHeight>900, 'mt-0': windowHeight<700}" v-if="count === 0">
                        <v-col cols="3">
                            <v-img :src="combustion" :max-height="windowHeight>900 ? '450': '270'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="hibridos" :max-height="windowHeight>900 ? '450': '270'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="electricos" :max-height="windowHeight>900 ? '450': '270'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="otros" :max-height="windowHeight>900 ? '450': '270'"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="bg-gradient mx-5 animate__animated animate__backInRight" v-if="count === 0">
                        <v-col cols="3" align="center">
                            <p class="font-weight-bold font-avenir" :class="{'font-size-30': windowHeight>900, 'font-size-22': windowHeight<700}">Altas</p>
                        </v-col>
                        <v-col cols="3" align="center">
                            <p class="font-weight-bold font-avenir" :class="{'font-size-30': windowHeight>900, 'font-size-22': windowHeight<700}">Medias/bajas</p>
                        </v-col>
                        <v-col cols="6" align="center">
                            <p class="font-weight-bold font-avenir" :class="{'font-size-30': windowHeight>900, 'font-size-22': windowHeight<700}">Cero emisiones</p>
                        </v-col>
                    </v-row>

                    <!--ICE-->
                    <v-row justify="center" v-if="count >= 1 && count <= 7">
                        <v-col cols="12">
                            <v-img :src="icm" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 1"></v-img>
                            <v-img :src="icm2" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 2"></v-img>
                            <v-img :src="icm3" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 3"></v-img>
                            <v-img :src="icm4" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 4"></v-img>
                            <v-img :src="icm5" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 5"></v-img>
                            <v-img :src="icm6" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 6"></v-img>
                            <v-img :src="icm7" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 7"></v-img>
                        </v-col>
                    </v-row>
                    <!--MHEV-->
                    <v-row justify="center" v-if="count >= 8 && count <=14">
                        <v-col cols="12">
                            <v-img :src="mhev" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 8"></v-img>
                            <v-img :src="mhev2" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 9"></v-img>
                            <v-img :src="mhev3" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 10"></v-img>
                            <v-img :src="mhev4" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 11"></v-img>
                            <v-img :src="mhev5" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 12"></v-img>
                            <v-img :src="mhev6" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 13"></v-img>
                            <v-img :src="mhev7" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 14"></v-img>
                        </v-col>
                    </v-row>
                    <!--HEV-->
                    <v-row justify="center" v-if="count >= 15 && count <=21">
                        <v-col cols="12">
                            <v-img :src="hev" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 15"></v-img>
                            <v-img :src="hev2" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 16"></v-img>
                            <v-img :src="hev3" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 17"></v-img>
                            <v-img :src="hev4" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 18"></v-img>
                            <v-img :src="hev5" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 19"></v-img>
                            <v-img :src="hev6" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 20"></v-img>
                            <v-img :src="hev7" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 21"></v-img>
                        </v-col>
                    </v-row>
                    <!--PHEV-->
                    <v-row justify="center" v-if="count>=22 && count <=28">
                        <v-col cols="12">
                            <v-img :src="phev" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 22"></v-img>
                            <v-img :src="phev2" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 23"></v-img>
                            <v-img :src="phev3" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 24"></v-img>
                            <v-img :src="phev4" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 25"></v-img>
                            <v-img :src="phev5" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 26"></v-img>
                            <v-img :src="phev6" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 27"></v-img>
                            <v-img :src="phev7" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 28"></v-img>
                        </v-col>
                    </v-row>
                    <!--BEV-->
                    <v-row justify="center" v-if="count>=29 && count <=35">
                        <v-col cols="12">
                            <v-img :src="bev" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 29"></v-img>
                            <v-img :src="bev2" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 30"></v-img>
                            <v-img :src="bev3" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 31"></v-img>
                            <v-img :src="bev4" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 32"></v-img>
                            <v-img :src="bev5" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 33"></v-img>
                            <v-img :src="bev6" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 34"></v-img>
                            <v-img :src="bev7" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 35"></v-img>
                        </v-col>
                    </v-row>
                    <!--fcev-->
                    <v-row justify="center" v-if="count>=36 && count<=42">
                        <v-col cols="12">
                            <v-img :src="fcev" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 36"></v-img>
                            <v-img :src="fcev2" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 37"></v-img>
                            <v-img :src="fcev3" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 38"></v-img>
                            <v-img :src="fcev4" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 39"></v-img>
                            <v-img :src="fcev5" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 40"></v-img>
                            <v-img :src="fcev6" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 41"></v-img>
                            <v-img :src="fcev7" :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="count === 42"></v-img>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script setup>
import ContentTemplate from '../templates/ContentTemplate.vue';
import user from '@/assets/evolucion/user.png'
import combustion from '@/assets/evolucion/combustion.png'
import hibridos from '@/assets/evolucion/hibridos.png'
import electricos from '@/assets/evolucion/electricos.png'
import otros from '@/assets/evolucion/otros.png'

import Mcombustion from '@/assets/evolucion/combustion-interna.png'
import Mhibrido from '@/assets/evolucion/hibrido-fuerte.png'
import Mbateria from '@/assets/evolucion/motor-bateria.png'

import icm from '@/assets/evolucion/icm/icm1.png'
import icm2 from '@/assets/evolucion/icm/icm2.png'
import icm3 from '@/assets/evolucion/icm/icm3.png'
import icm4 from '@/assets/evolucion/icm/icm4.png'
import icm5 from '@/assets/evolucion/icm/icm5.png'
import icm6 from '@/assets/evolucion/icm/icm6.png'
import icm7 from '@/assets/evolucion/icm/icm7.png'

import mhev from '@/assets/evolucion/mhev/mhev1.png'
import mhev2 from '@/assets/evolucion/mhev/mhev2.png'
import mhev3 from '@/assets/evolucion/mhev/mhev3.png'
import mhev4 from '@/assets/evolucion/mhev/mhev4.png'
import mhev5 from '@/assets/evolucion/mhev/mhev5.png'
import mhev6 from '@/assets/evolucion/mhev/mhev6.png'
import mhev7 from '@/assets/evolucion/mhev/mhev7.png'

import hev from '@/assets/evolucion/hev/hev1.png'
import hev2 from '@/assets/evolucion/hev/hev2.png'
import hev3 from '@/assets/evolucion/hev/hev3.png'
import hev4 from '@/assets/evolucion/hev/hev4.png'
import hev5 from '@/assets/evolucion/hev/hev5.png'
import hev6 from '@/assets/evolucion/hev/hev6.png'
import hev7 from '@/assets/evolucion/hev/hev7.png'

import phev from '@/assets/evolucion/phev/phev1.png'
import phev2 from '@/assets/evolucion/phev/phev2.png'
import phev3 from '@/assets/evolucion/phev/phev3.png'
import phev4 from '@/assets/evolucion/phev/phev4.png'
import phev5 from '@/assets/evolucion/phev/phev5.png'
import phev6 from '@/assets/evolucion/phev/phev6.png'
import phev7 from '@/assets/evolucion/phev/phev7.png'

import bev from '@/assets/evolucion/pev/pev1.png'
import bev2 from '@/assets/evolucion/pev/pev2.png'
import bev3 from '@/assets/evolucion/pev/pev3.png'
import bev4 from '@/assets/evolucion/pev/pev4.png'
import bev5 from '@/assets/evolucion/pev/pev5.png'
import bev6 from '@/assets/evolucion/pev/pev6.png'
import bev7 from '@/assets/evolucion/pev/pev7.png'

import fcev from '@/assets/evolucion/fcev/fcev1.png'
import fcev2 from '@/assets/evolucion/fcev/fcev2.png'
import fcev3 from '@/assets/evolucion/fcev/fcev3.png'
import fcev4 from '@/assets/evolucion/fcev/fcev4.png'
import fcev5 from '@/assets/evolucion/fcev/fcev5.png'
import fcev6 from '@/assets/evolucion/fcev/fcev6.png'
import fcev7 from '@/assets/evolucion/fcev/fcev7.png'

import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';
import { onMounted, reactive } from '@vue/runtime-core';

const store = useCounterStore()
const {canNext, windowHeight, windowSize, count} = storeToRefs(store)

onMounted(() => {
    canNext.value = true
    count.value = 0
})
</script>

<style scoped>
.bg-gradient{
    background: linear-gradient( 270deg, #FED374 28.78%, rgba(254, 211, 116, 0) 136.06%);;
}
</style>