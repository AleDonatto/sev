<template>
    <div>
        <content-template 
        :title="count === 1 ? 'Motor a combustión interna (ICE)' : count === 2 ? 'Semihíbridos (MHEV)': 
        count === 3 ? 'Motor híbrido fuerte Full (HEV)': count === 4 ? 'Motor híbrido enchufable (PHEV)': 
        count === 5 ? 'Motor eléctricos a bateria (BEV)': count === 6 ? 'Motor eléctrico de celdas combustibles (FCEV)': ''" 
        subtitle="Tipos de tren <br/> motriz más comúnes">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="space-between">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="10" v-if="count == 0">
                            <div class="border-box-quiz nimate__animated animate__backInLeft" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1" >
                                    <v-card-text class="" :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
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
                            <div class="border-box-quiz nimate__animated animate__backInLeft" v-if="count === 1"
                            :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text class="" :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                        A continuación vamos a analizar los componentes principales que conforman cada tipo de tren motriz y la función que desempeñan.
                                        <br><br>
                                        Vamos a iniciar con los vehículos con motor a combustión interna también llamados ICE.
                                        <br><br>
                                        En ellos, el motor a combustión es fundamental y es quien genera toda la energía y la fuerza para el 
                                        movimiento del vehículo. No cuentan con un motor eléctrico que pueda propulsar al automóvil y 
                                        la batería presente es una de bajo voltaje que suministra corriente eléctrica a los diferentes sistemas 
                                        eléctricos.
                                        <br><br>
                                        Este tipo de unidades no cuenta con una batería de alto voltaje (también conocida como batería de tracción). Al no haber motores eléctricos que puedan mover al auto, no tienen una autonomía eléctrica.
                                        <br><br>
                                        Sus niveles de emisiones contaminantes se consideran altas ya que están quemando combustibles fósiles para generar el movimiento del vehículo.
                                        <br><br>
                                        La recarga de este tipo de vehículos es muy rápida. En unos cuantos minutos puedes llenar el tanque de combustible en una estación de servicio.
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="border-box-quiz nimate__animated animate__backInLeft" v-if="count === 2"
                            :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text class="" :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                        Los vehículos semihíbridos (también conocidos como MHEV o mild hybrid), son el primer paso hacia 
                                        la electrificación.  Estos cuentan ya con un motor eléctrico pequeño y de baja potencia. Si bien no 
                                        se pueden mover únicamente con la fuerza de este motor eléctrico, si se tiene un pequeño beneficio 
                                        por la aportación de energía que hace al sistema. Es decir, el motor eléctrico es una asistencia para 
                                        el motor de gasolina bajo ciertas condiciones. De tal manera que podríamos concluir que el motor de 
                                        gasolina es primordial mientras que el motor eléctrico es simplemente un sistema de asistencia.
                                        <br><br>
                                        Los sistemas semihíbridos suelen ocupar baterías de bajo voltaje (12 a 48 voltios dependiendo del fabricante) y no cuentan con baterías de tracción de alto voltaje.
                                        <br><br>
                                        Al no poder moverse únicamente con el motor eléctrico, no se considera que tengan autonomía eléctrica.
                                        <br><br>
                                        Sus emisiones contaminantes son ligeramente más bajas que en un vehiculo tradicional pero aún se consideran elevadas.
                                        <br><br>
                                        Finalmente, el tiempo de recarga es corto ya que en unos minutos se puede cargar combustible y llenar el tanque.
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="border-box-quiz nimate__animated animate__backInLeft" v-if="count === 3"
                            :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text class="" :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                        Vehículos híbridos fuertes (también conocidos como Full HEV o híbridos autorecargables). 
                                        Estos son con seguridad los híbridos más conocidos y más comercializados a nivel mundial. 
                                        Se trata de sistemas que ya cuentan con motor o motores eléctricos suficientemente fuertes 
                                        para mover al vehículo y que almacenan la energía eléctrica en baterías de tracción de alto voltaje.
                                        <br><br>
                                        Las baterías de tracción son de alto voltaje pero tienen una capacidad de carga relativamente 
                                        pequeña (0.9 a 2.5 kilowatthora) y que permiten un movimiento 100% eléctrico por distancias 
                                        limitadas (normalmente de 3 a 5 km).
                                        <br><br>
                                        Es debido a estas limitantes al movimiento 100% eléctrico que la mayor parte del tiempo operan en 
                                        un ciclo combinado eléctrico-gasolina. Gracias a sus motores eléctricos, las emisiones contaminantes 
                                        son mucho más reducidas que las de los ICE o MHEV.
                                        <br><br>
                                        Debido a que las baterías de tracción de estos vehículos se cargan durante el rodamiento del 
                                        vehículo o con el motor de combustible, no deben (ni pueden) conectarse a una fuente de corriente 
                                        eléctrica. De esta manera el usuario únicamente debe llenar el tanque de combustible, un proceso 
                                        que lleva muy poco tiempo.
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="border-box-quiz nimate__animated animate__backInLeft" v-if="count===4"
                            :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text class="" :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                        En años recientes se ha incrementado el número de vehículos híbridos enchufables que se 
                                        ofrecen en diferentes marcas. Este tipo de autos, también conocidos como PHEV o plug-in 
                                        hybrid cuentan con uno o varios motores eléctricos de alta potencia que son capaces de mover 
                                        al vehículo de manera 100% eléctrica. La diferencia principal con un Full Hybrid o híbrido 
                                        autorecargable es que en los PHEV las baterías de tracción suelen tener mayor capacidad 
                                        (de 9 a 24 kilo watt hora o incluso más grandes en algunos casos).
                                        <br><br>
                                        Gracias a estas baterías de gran capacidad, pueden tener la capacidad de recorrer largas 
                                        distancias de manera 100% eléctrico (entre 24 a 80 kilómetros de autonomía es algo normal y 
                                        hay algunos que ofrecen hasta 100 km). Esto implica que durante el uso cotidiano en ciudad, 
                                        la mayor parte del tiempo se mueven de forma 100% eléctrica, pero cuando es necesario pueden 
                                        recurrir al motor de combustión para extender sus capacidades y funcionar en ciclo combinado 
                                        eléctrico-gasolina por distancias mucho más largas.
                                        <br><br>
                                        Este tipo de vehículos pueden tener emisiones contaminantes de medias a muy bajas dependiendo 
                                        del uso que se haga de ellos y de los hábitos de carga del usuario.
                                        <br><br>
                                        En cuanto al tiempo de recarga podemos decir que el abastecimiento de combustible es muy rápido 
                                        y que el tiempo en que se cargan las baterías es medio. Este último puede variar mucho dependiendo 
                                        de la capacidad de la batería y el tipo de cargador utilizado. Normalmente se aprovechan los 
                                        tiempos en los que el auto no está siendo utilizado para la recarga de las baterías.
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="border-box-quiz nimate__animated animate__backInLeft" v-if="count===5"
                            :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text class="" :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                        Finalmente hablaremos de los vehículos eléctricos a batería también conocidos como BEV. 
                                        En este tipo de unidades, el motor de combustible desaparece por completo y es el motor 
                                        o los motores eléctricos quienes son responsables del movimiento del auto. Las baterías 
                                        de tracción son de alto voltaje y normalmente son de gran capacidad; desde 20 hasta 100 
                                        kilo watt hora es habitual.
                                        <br><br>
                                        Los BEV son los vehículos más ecológicos en el sentido de que no generan emisiones de gases de efecto invernadero.
                                        <br><br>
                                        La autonomía eléctrica suele ser bastante grande y dependerá de varios factores como pueden ser: 
                                        la capacidad de la batería, las condiciones de operación (velocidad, tráfico, pendientes, 
                                        temperatura ambiente, etc.) y el peso vehícular. Es normal encontrar vehículos eléctricos con 
                                        autonomías desde los 100 hasta los 1000 km.
                                        <br><br>
                                        El tiempo de recarga de estos autos es uno de los obstáculos más grandes que se presentan. 
                                        Dependiendo de varios factores como pueden ser la capacidad de la batería, la potencia del 
                                        cargador utilizado, la temperatura ambiente y la temperatura de funcionamiento del sistema, 
                                        se puede tardar desde unos 30 minutos hasta más de 60 horas para abastecer carga a las baterías.
                                        <br><br>
                                        Es por esto que resulta sumamente importante poder guiar a los compradores de este tipo de unidad 
                                        a una solución satisfactoria de acuerdo a sus necesidades.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                        <v-col cols="2" align="end">
                            <v-img src="@/assets/evolucion/combustion-interna.png" contain :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count === 1"></v-img>
                            <v-img src="@/assets/evolucion/combustion-interna.png" contain :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count === 2"></v-img>
                            <v-img src="@/assets/evolucion/hibrido-fuerte.png" contain :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count === 3"></v-img>
                            <v-img src="@/assets/evolucion/combustion-interna.png" contain :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count===4"></v-img>
                            <v-img src="@/assets/evolucion/motor-bateria.png" contain :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count===5"></v-img>
                            <v-img src="@/assets/evolucion/combustion-interna.png" contain :max-height="windowHeight> 900 ? '190': windowHeight<660 ? '160': '170'" v-if="count===6"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mx-5 animate__animated animate__backInLeft" :class="{'mt-4': windowHeight>900, 'mt-0': windowHeight<700}" v-if="count === 0">
                        <v-col cols="3">
                            <v-img src="@/assets/evolucion/combustion.png" contain :max-height="windowHeight>900 ? '450': '265'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img src="@/assets/evolucion/hibridos.png" contain :max-height="windowHeight>900 ? '450': '265'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img src="@/assets/evolucion/electricos.png" contain :max-height="windowHeight>900 ? '450': '265'"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img src="@/assets/evolucion/otros.png" contain :max-height="windowHeight>900 ? '450': '265'"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="bg-gradient mx-5 animate__animated animate__backInRight" v-if="count === 0">
                        <v-col cols="3" align="center">
                            <p class="font-weight-bold " :class="{'font-size-30': windowHeight>900, 'font-size-20': windowHeight<700}">Altas</p>
                        </v-col>
                        <v-col cols="3" align="center">
                            <p class="font-weight-bold " :class="{'font-size-30': windowHeight>900, 'font-size-20': windowHeight<700}">Medias/bajas</p>
                        </v-col>
                        <v-col cols="6" align="center">
                            <p class="font-weight-bold " :class="{'font-size-30': windowHeight>900, 'font-size-20': windowHeight<700}">Cero emisiones</p>
                        </v-col>
                    </v-row>

                    <!--ICE-->
                    <v-row justify="center" v-if="count === 1">
                        <v-col cols="12">
                            <v-img src="@/assets/evolucion/icm/icm1.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 1"></v-img>
                            <v-img src="@/assets/evolucion/icm/icm2.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 2"></v-img>
                            <v-img src="@/assets/evolucion/icm/icm3.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 3"></v-img>
                            <v-img src="@/assets/evolucion/icm/icm4.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 4"></v-img>
                            <v-img src="@/assets/evolucion/icm/icm5.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 5"></v-img>
                            <v-img src="@/assets/evolucion/icm/icm6.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 6"></v-img>
                            <v-img src="@/assets/evolucion/icm/icm7.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 7"></v-img>
                        </v-col>
                    </v-row>
                    <!--MHEV-->
                    <v-row justify="center" v-if="count === 2">
                        <v-col cols="12">
                            <v-img src="@/assets/evolucion/mhev/mhev1.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 1"></v-img>
                            <v-img src="@/assets/evolucion/mhev/mhev2.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 2"></v-img>
                            <v-img src="@/assets/evolucion/mhev/mhev3.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 3"></v-img>
                            <v-img src="@/assets/evolucion/mhev/mhev4.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 4"></v-img>
                            <v-img src="@/assets/evolucion/mhev/mhev5.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 5"></v-img>
                            <v-img src="@/assets/evolucion/mhev/mhev6.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 6"></v-img>
                            <v-img src="@/assets/evolucion/mhev/mhev7.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 7"></v-img>
                        </v-col>
                    </v-row>
                    <!--HEV-->
                    <v-row justify="center" v-if="count === 3">
                        <v-col cols="12">
                            <v-img src="@/assets/evolucion/hev/hev1.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 1"></v-img>
                            <v-img src="@/assets/evolucion/hev/hev2.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 2"></v-img>
                            <v-img src="@/assets/evolucion/hev/hev3.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 3"></v-img>
                            <v-img src="@/assets/evolucion/hev/hev4.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 4"></v-img>
                            <v-img src="@/assets/evolucion/hev/hev5.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 5"></v-img>
                            <v-img src="@/assets/evolucion/hev/hev6.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 6"></v-img>
                            <v-img src="@/assets/evolucion/hev/hev7.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 7"></v-img>
                        </v-col>
                    </v-row>
                    <!--PHEV-->
                    <v-row justify="center" v-if="count===4">
                        <v-col cols="12">
                            <v-img src="@/assets/evolucion/phev/phev1.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 1"></v-img>
                            <v-img src="@/assets/evolucion/phev/phev2.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 2"></v-img>
                            <v-img src="@/assets/evolucion/phev/phev3.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 3"></v-img>
                            <v-img src="@/assets/evolucion/phev/phev4.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 4"></v-img>
                            <v-img src="@/assets/evolucion/phev/phev5.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 5"></v-img>
                            <v-img src="@/assets/evolucion/phev/phev6.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 6"></v-img>
                            <v-img src="@/assets/evolucion/phev/phev7.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 7"></v-img>
                        </v-col>
                    </v-row>
                    <!--BEV-->
                    <v-row justify="center" v-if="count===5">
                        <v-col cols="12">
                            <v-img src="@/assets/evolucion/pev/pev1.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 1"></v-img>
                            <v-img src="@/assets/evolucion/pev/pev2.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 2"></v-img>
                            <v-img src="@/assets/evolucion/pev/pev3.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 3"></v-img>
                            <v-img src="@/assets/evolucion/pev/pev4.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 4"></v-img>
                            <v-img src="@/assets/evolucion/pev/pev5.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 5"></v-img>
                            <v-img src="@/assets/evolucion/pev/pev6.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 6"></v-img>
                            <v-img src="@/assets/evolucion/pev/pev7.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 7"></v-img>
                        </v-col>
                    </v-row>
                    <!--fcev-->
                    <v-row justify="center" v-if="count===6">
                        <v-col cols="12">
                            <v-img src="@/assets/evolucion/fcev/fcev1.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 1"></v-img>
                            <v-img src="@/assets/evolucion/fcev/fcev2.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 2"></v-img>
                            <v-img src="@/assets/evolucion/fcev/fcev3.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 3"></v-img>
                            <v-img src="@/assets/evolucion/fcev/fcev4.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 4"></v-img>
                            <v-img src="@/assets/evolucion/fcev/fcev5.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 5"></v-img>
                            <v-img src="@/assets/evolucion/fcev/fcev6.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 6"></v-img>
                            <v-img src="@/assets/evolucion/fcev/fcev7.png" contain :max-height="windowHeight> 900 ? '580': windowHeight<660 ? '320': '350'" class="animate__animated animate__backInDown" v-if="countShowImage === 7"></v-img>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script>
import ContentTemplate from '../templates/ContentTemplate.vue';
import { mapState } from 'vuex';

export default {
    data() {
        return {

        }
    },
    components: {
        ContentTemplate,
    },
    computed: {
        ...mapState(['canNext', 'windowHeight', 'windowSize', 'count','countShowImage']),
        checkAudios: function () {
            if(this.count === 1){
                return this.playAudioStepICE()
            }
        }
    },
    mounted(){
        //this.canNext = true,
        //this.count = 0
        this.$store.commit('StateAssign', {count: 0})
        this.$store.commit('StateAssign', {canNext: false})
        this.playAudio()
    },
    methods: {
        playAudio(){
            window.audio.src = require('@/assets/audios/evolucion/SEV-evolucion-5.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },37500)
        },
        playAudioStepICE(){
            this.$store.commit('StateAssign', {canNext: false})
            window.audio.src = require('@/assets/audios/evolucion/SEV-evolucion-6.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },62500)
        }
    }
}
</script>

<style scoped>
.bg-gradient{
    background: linear-gradient( 270deg, #FED374 28.78%, rgba(254, 211, 116, 0) 136.06%);;
}
</style>