function cocktailData(cocktail){
    let data ={
        viewBox:'',
        profileInfo:{
            title:'',
            header:'',
            body:'',
        }
    }
    if (cocktail == 'aroha'){
        data ={
        viewBox:'0 0 329 497',
        profileInfo:{
            title:'Aroha',
            header:'MULTIMEDIA',
            body:'Descripción del cocktail',
        }
    }}
    else if (cocktail =='elixir'){
        data ={
        viewBox:'0 0 318 409',
        profileInfo:{
            title:'Elixir',
            header: '../src/assets/elixir.jpeg',
            body:'Del pasaje de la coctelería a la mixología: "El más-allá del sabor y la presentación". \n\n Elixir es el resultado de la búsqueda de Alessandro® por añadir profundidad a sus cócteles; su investigación lo condujo a los registros de los primeros esbozos de una herboristería. Las curanderas, las llamadas "brujas blancas" o porque no, las primeras científicas de la salud tenían en alta estima a la flor de Sauco; la infusionaban con frutos silvestres para extraer sus propiedades revitalizantes. Por otro lado aprovechaban las propiedades de la manzana para hacer brebajes vigorizantes; con el tiempo, el fruto en sí mismo se convertiría en un poderoso símbolo, asociado fundamentalmente a la vida y la creación. \n\n Este cóctel integra cuidadosamente Flor de Sauco, cerezas y manzanas, logrando abrirle el apetito a quien lo bebe. Entiéndase "apetito" en el sentido más amplio y radical del término: empuje a devorarse el mundo, que es al fin y al cabo el horizonte de cualquier elixir.',
        }
    }}
    else if (cocktail =='iceberg'){
        data ={
        viewBox:'0 0 271 406',
        profileInfo:{
            title:'Iceberg',
            header:'../src/assets/iceberg.jpg',
            body:'Con ojos de niño pintó de celeste el hielo, así llenaba las lagunas en su memoria de un viaje a la Antártida que nunca hizo; absorto en su labor comenzó a narrar el apasible silencio que allí reinaba, desde el primer sorbo hasta la última gota. \n\n"¿Y el coco?"\n "El coco son los pingüinos" me dijo, como si fuera algo obvio. \n\n En silencio... y un poco avergonzado, contemplé como el coctelero hacía nevar sobre lo que sería su creación más pura: un trozo de hielo, un iceberg, desprendido indudablemente de la mismísima Antártida.',
        }
    }}
    else if (cocktail =='maisgarden'){
        data ={
        viewBox:'0 0 298 468',
        profileInfo:{
            title:"Mai's Garden",
            header:'../src/assets/maisgarden5.jpeg',
            body:['Primero, beba;\n Segundo sepa,\n que es exactamente así como sabe el amor.\n\n LAS CEREZAS (1/X)\n\n "Durante el primer otoño que vivieron juntos (porque es en otoño cuando los huesos se calan y no en primavera como livianamente se dice) Mai existía por y para las cerezas, era más que un capricho, era una decisión de vida. Y es que sencillamente ella no iba a levantarse sin sus cerezas. Cada mañana al sentir el ruido de la licuadora, preguntaba con los ojos a medio abrir por si tenía que volver a cerrarlos "Amor, ¿Qué estás haciendo?", desde la cocina él no respondía, se oía un silencio seco al apagarse el aparato y el eco de sus pasos cada vez más cerca; entonces aparecía por la habitación con ojos cansados, una sonrisa ligera pero firme y un batido rosa con pecas rojas decorado con las cerezas más bellas que nadie más que él podría encontrar, porque cualquiera consigue buenas cerezas en primavera, pero no en otoño, en otoño, solo el que ama."','Primero, beba;\n segundo sepa, \n que es exactamente así como sabe el amor.\n\n FRUTOS ROJOS (2/X)\n\n"Cada mañana sonaba el despertador bien bajito, de manera tal que ella no lo notara. Él se levantaba, cogía la ropa que había preparado la noche anterior y se iba a vestir a la cocina, para no despertarla. Buscaba en el congelador "la fruta de estación", un año fueron las cerezas, otro las fresas... en general se trataba de algún fruto rojo... de esos que escasean. Esa mañana escaseó, por la razón que fuera, no quedaba ninguna que pudiera aprovecharse. Con urgencia pero sin prisa, que eso ya es torpeza, se deslizó fuera de la casa, cerró sigilosamente la puerta y confirmó posando su oreja que dentro solo respondía el silencio. Recorrió los negocios cercanos: todos cerrados. Cogió el metro, se cambió de línea, caminó tres calles y tomó el tren hacia las afueras de Barcelona. Caminó 3 kilómetros bordeando el río, adentrándose en el bosque. Allí, donde aquella tarde de verano le propuso matrimonio, todavía daba sus frutos la misma Zarzamora.\n Cuando regresó, siempre en silencio para no despertarla, entreabrió la puerta de la habitación y entonces sí encendió la licuadora."'],
        }
    }}
    else if (cocktail =='orangebreeze'){
        data ={
        viewBox:'0 0 336 478',
        profileInfo:{
            title:'Orange Breeze',
            header:'../src/assets/orangebreeze.jpeg',
            body:'El aire caluroso y húmedo de los veranos en Barcelona abraza y abrasa a todo aquel que no tenga la buena fortuna de estar junto al mar. Tanto aquel que trabaja religiosamente como el turista desorientado sienten el rostro ardiendo y una que otra gota de sudor recorriéndole la espalda que eventualmente terminará por estrellarse en el suelo. \n\n Entonces, una brisa anaranjada con notas de maracuyá los acaricia amablemente, les da consuelo y un respiro que, si bien no les cambiará la vida, les permitirá seguir. Quizás mañana, cuando Barcelona vuelva a arder, la refrescante brisa los encuentre de nuevo, en el lugar de siempre...',
        }
    }}
    else if (cocktail =='reñesjewel'){
        data ={
        viewBox:'0 0 330 498',
        className:'reñesjewel',
        profileInfo:{
            title:"Reñe's Jewel",
            header:'../src/assets/reñesjewel1.jpeg',
            body:'Es fascinante el encuentro entre un paladar ingenuo y la crema catalana; es impactante desentrañar sus secretos y descubrir que ingredientes tan simples, en manos diestras, resultan en un manjar. \n\n La "Joya de Reñé" se inspira en este primer encuentro. Con notas de clavo y canela, es quizás nuestro cóctel predilecto: un homenaje a las profundidades del buen gusto y un agradecimiento a Barcelona, que nos permitió experimentarlo.',
        }
    }}
    else if (cocktail =='sicilia'){
        data ={
        viewBox:'0 0 271 482',
        profileInfo:{
            title:'Sicilia',
            header:'../src/assets/sicilia.jpeg',
            body:'Levántese al alba y trabaje la tierra hasta que el sol se pierda entre montañas. Venda la cosecha y vuelva a empezar, que aquí el campo da a quien le da. Eso sí, el fruto más dulce no lo venda, ese es suyo. \n\n "Sicilia" es un cóctel que se transforma. Los vivos colores de "l\'arancia e il mare" darán paso al verde de los campos sicilianos. Lo mismo ocurre en el paladar: cuando se calme el dulzor del almibar, el bitter le recordará esa extraña y sutil amargura de volver a empezar.'
        }
    }}
    else {
        data ={
        viewBox:'',
        profileInfo:{
            title:'',
            header:'',
            body:'',
        }
    }}
return(data)}

export default cocktailData