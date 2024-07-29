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
            epigraph:'Cóctel con base de ron y cayena, de intensidad fuerte y picante al paladar, notas cítricas y tropicales con predominancia del mango.',
            body:'Descripción del cocktail',
        }
    }}
    else if (cocktail =='elixir'){
        data ={
        viewBox:'0 0 318 409',
        profileInfo:{
            title:'Elixir',
            header: 'elixir.jpeg',
            epigraph:'Cóctel con base de vodka, de intensidad media al paladar. Notas de flor de sauco, manzana y cerezas.',
            body:'Del pasaje de la coctelería a la mixología: "El más-allá del sabor y la presentación". \n\n Elixir es el resultado de la búsqueda de Alessandro® por añadir profundidad a sus cócteles; su investigación lo condujo a los registros de los primeros esbozos de una herboristería. Las curanderas, las llamadas "brujas blancas" o porque no, las primeras científicas de la salud tenían en alta estima a la flor de Sauco; la infusionaban con frutos silvestres para extraer sus propiedades revitalizantes. Por otro lado aprovechaban las propiedades de la manzana para hacer brebajes vigorizantes; con el tiempo, el fruto en sí mismo se convertiría en un poderoso símbolo, asociado fundamentalmente a la vida y la creación. \n\n Este cóctel integra cuidadosamente Flor de Sauco, cerezas y manzanas, logrando abrirle el apetito a quien lo bebe. Entiéndase "apetito" en el sentido más amplio y radical del término: empuje a devorarse el mundo, que es al fin y al cabo el horizonte de cualquier elixir.',
        }
    }}
    else if (cocktail =='iceberg'){
        data ={
        viewBox:'0 0 271 406',
        profileInfo:{
            title:'Iceberg',
            header:'iceberg.jpg',
            epigraph:'Cóctel con base de ginebra y coco, de intensidad media con final seco.',
            body:'Con ojos de niño pintó de celeste el hielo, así llenaba las lagunas en su memoria de un viaje a la Antártida que nunca hizo; absorto en su labor comenzó a narrar el apasible silencio que allí reinaba, desde el primer sorbo hasta la última gota. \n\n"¿Y el coco?"\n "El coco son los pingüinos" me dijo, como si fuera algo obvio. \n\n En silencio... y un poco avergonzado, contemplé como el coctelero hacía nevar sobre lo que sería su creación más pura: un trozo de hielo, un iceberg, desprendido indudablemente de la mismísima Antártida.',
        }
    }}
    else if (cocktail =='maisgarden'){
        data ={
        viewBox:'0 0 298 468',
        profileInfo:{
            title:"Mai's Garden",
            header:'maisgarden5.jpeg',
            epigraph:'Cóctel con base de ginebra y té de frutos rojos, de intensidad media y notas dulces a frutas del bosque.',
            body:'Primero, beba;\n Segundo sepa,\n que es exactamente así como sabe el amor.\n\n "Durante el primer otoño que vivieron juntos (porque es en otoño cuando los huesos se calan y no en primavera como livianamente se dice) Mai existía por y para las cerezas, era más que un capricho, era una decisión de vida. Y es que sencillamente ella no iba a levantarse sin sus cerezas. Cada mañana al sentir el ruido de la licuadora, preguntaba con los ojos a medio abrir por si tenía que volver a cerrarlos "Amor, ¿Qué estás haciendo?", desde la cocina él no respondía, se oía un silencio seco al apagarse el aparato y el eco de sus pasos cada vez más cerca; entonces aparecía por la habitación con ojos cansados, una sonrisa ligera pero firme y un batido rosa con pecas rojas decorado con las cerezas más bellas que nadie más que él podría encontrar, porque cualquiera consigue buenas cerezas en primavera, pero no en otoño, en otoño, solo el que ama."',
        }
    }}
    else if (cocktail =='orangebreeze'){
        data ={
        viewBox:'0 0 336 478',
        profileInfo:{
            title:'Orange Breeze',
            header:'orangebreeze.jpeg',
            epigraph:'Cóctel con base de vodka, de intensidad suave al paladar. Notas afrutadas con maracuyá, melocotón y naranja y ligeramente dulce.',
            body:'El aire caluroso y húmedo de los veranos en Barcelona abraza y abrasa a todo aquel que no tenga la buena fortuna de estar junto al mar. Tanto aquel que trabaja religiosamente como el turista desorientado sienten el rostro ardiendo y una que otra gota de sudor recorriéndole la espalda que eventualmente terminará por estrellarse en el suelo. \n\n Entonces, una brisa anaranjada con notas de maracuyá los acaricia amablemente, les da consuelo y un respiro que, si bien no les cambiará la vida, les permitirá seguir. Quizás mañana, cuando Barcelona vuelva a arder, la refrescante brisa los encuentre de nuevo, en el lugar de siempre...',
        }
    }}
    else if (cocktail =='reñesjewel'){
        data ={
        viewBox:'0 0 330 498',
        className:'reñesjewel',
        profileInfo:{
            title:"Reñe's Jewel",
            header:'reñesjewel1.jpeg',
            epigraph:'Cóctel con base de ginebra infusionada en canela y clavo de olor; de intensidad media y notas afrutadas.',
            body:'Es fascinante el encuentro entre un paladar ingenuo y la crema catalana; es impactante desentrañar sus secretos y descubrir que ingredientes tan simples, en manos diestras, resultan en un manjar. \n\n La "Joya de Reñé" se inspira en este primer encuentro. Con notas de clavo y canela, es quizás nuestro cóctel predilecto: un homenaje a las profundidades del buen gusto y un agradecimiento a Barcelona, que nos permitió experimentarlo.',
        }
    }}
    else if (cocktail =='sicilia'){
        data ={
        viewBox:'0 0 271 482',
        profileInfo:{
            title:'Sicilia',
            header:'sicilia.jpeg',
            epigraph:'Cóctel con base de Crodino (bitter italiano), de intensidad fuerte y amarga debido al acompañamiento del ron. Notas cítricas y frescas.',
            body:'Levántese al alba y trabaje la tierra hasta que el sol se pierda entre montañas. Venda la cosecha y vuelva a empezar, que aquí el campo da a quien le da. Eso sí, el fruto más dulce no lo venda, ese es suyo. \n\n "Sicilia" es un cóctel que se transforma. Los vivos colores de "l\'arancia e il mare" darán paso al verde de los campos sicilianos. Lo mismo ocurre en el paladar: cuando se calme el dulzor del almibar, el bitter le recordará esa extraña y sutil amargura de volver a empezar.'
        }
    }}
    else {
        data ={
        viewBox:'',
        profileInfo:{
            title:'',
            header:'',
            epigraph:'',
            body:'',
        }
    }}
return(data)}

export default cocktailData