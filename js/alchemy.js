/*ALQUIMIA*/
$(function(){

/*Arreglo de Objetos */
const ingredientes = [
  {id: "Abeja", efecto1: 'Restaurar Aguante',  efecto2: 'Disminuir Aguante', efecto3: 'Regenerar Aguante', efecto4: 'Debilidad a la Descarga', peso: .1, valor: 3},
  {id: "Aceite Enano", efecto1: 'Debilidad a la Magia',  efecto2: 'Reforzar Ilusion', efecto3: 'Regenerar Magia', efecto4: 'Restaurar Magia', peso: .3, valor: 15},
  {id: "Ajo", efecto1: 'Resistencia al  Veneno',  efecto2: 'Reforzar Aguante', efecto3: 'Regenerar Magia', efecto4: 'Regenerar Salud', peso: .3, valor: 1},
  {id: "Ala de Actias Luna", efecto1: 'Dañar Magia',  efecto2: 'Reforzar Armadura Ligera', efecto3: 'Regenerar Salud', efecto4: 'Invisibilidad', peso: .1, valor: 5},
  {id: "Ala de Dardo Azul", efecto1: 'Resistencia a la Descarga ',  efecto2: 'Reforzar Robo ', efecto3: 'Restaurar Salud', efecto4: 'Miedo', peso: .1, valor: 1},
  {id: "Ala de dardo naranja", efecto1: 'Restaurar Aguante',  efecto2: 'Disminuir Magia', efecto3: 'Reforzar Robo', efecto4: 'Daño Persistente a la Salud', peso: .1, valor: 1},
  {id: "Ala de Mariposa", efecto1: 'Restaurar Salud',  efecto2: 'Reforzar Elocuencia', efecto3: 'Daño Persistente al Aguante', efecto4: 'Dañar Magia', peso: .1, valor: 3},
  {id: "Ala de Mariposa Azul", efecto1: 'Dañar Aguante',  efecto2: 'Reforzar Conjuración', efecto3: 'Dañar Regeneración Magica', efecto4: 'Reforzar Encantamiento', peso: .1, valor: 2},
  {id: "Aleta Larga Abacea", efecto1: 'Debilidad a la Escarcha',  efecto2: 'Reforzar Discreción', efecto3: 'Debilidad al Veneno', efecto4: 'Reforzar Restauración', peso: .5, valor: 15},
  {id: "Amanita Muscaria", efecto1: 'Resistencia al Fuego',  efecto2: 'Reforzar Dos-Manos', efecto3: 'Frenesí', efecto4: 'Regenerar Aguante', peso: .1, valor: 2},
  {id: "Azúcar Lunar", efecto1: 'Debilidad al Fuego',  efecto2: 'Resistencia a la Escarcha', efecto3: 'Restaurar Magia', efecto4: 'Regenerar Magia', peso: .3, valor: 50},
  {id: "Belladama", efecto1: 'Dañar Salud',  efecto2: 'Dañar Regeneración Magica', efecto3: 'Daño Persistente al Aguante', efecto4: 'Reforzar Destrucción', peso: .1, valor: 8},
  {id: "Betty de río", efecto1: 'Dañar Salud',  efecto2: 'Reforzar Alteración', efecto3: 'Ralentizar', efecto4: 'Reforzar Capacidad de Carga', peso: .3, valor: 15},
  {id: "Campanilla de Muerte", efecto1: 'Dañar Salud',  efecto2: 'Disminuir Aguante', efecto3: 'Ralentizar', efecto4: 'Debilidad al Veneno', peso: .1, valor: 4},
  {id: "Cardo Lanudo", efecto1: 'Resistencia a la Magia',  efecto2: 'Reforzar Magia', efecto3: 'Reforzar Bloqueo', efecto4: 'Reforzar Elocuencia', peso: .1, valor: 1},
  {id: "Carne humana", efecto1: 'Dañar Salud',  efecto2: 'Paralisis', efecto3: 'Restaurar Magia', efecto4: 'Reforzar Discreción', peso: .3, valor: 1},
  {id: "Carpa de hist", efecto1: 'Restaurar Aguante',  efecto2: 'Reforzar Magia', efecto3: 'Dañar Regeneración de Aguante', efecto4: 'Respiración Acuatica', peso: .3, valor: 6},
  {id: "Cenizas de Berit (Mission)", efecto1: 'Dañar Aguante',  efecto2: 'Resistencia a la Escarcha', efecto3: 'Reforzar Conjuración', efecto4: 'Disminuir Aguante', peso: .5, valor: 5},
  {id: "Champiñón", efecto1: 'Debilidad a la Escarcha',  efecto2: 'Reforzar Armadura Pesada', efecto3: 'Restaurar Magia', efecto4: 'Disminuir Magia', peso: .3, valor: 0},
  {id: "Cola de Espada Cyrodílica", efecto1: 'Dañar Aguante',  efecto2: 'Reforzar Restauración', efecto3: 'Miedo', efecto4: 'Disminuir Salud', peso: .3, valor: 15},
  {id: "Cola de Skeever", efecto1: 'Dañar Regeneración de Aguante',  efecto2: 'Disminuir Salud', efecto3: 'Dañar Salud', efecto4: 'Reforzar Armadura Ligera', peso: .2, valor: 3},
  {id: "Colmillo de mamut molido", efecto1: 'Restaurar Aguante',  efecto2: 'Reforzar Discreción', efecto3: 'Debilidad al Fuego', efecto4: 'Miedo', peso: .1, valor: 2},
  {id: "Corazón de Daedra", efecto1: 'Restaurar Salud',  efecto2: 'Dañar Regeneración de Aguante', efecto3: 'Dañar Magia', efecto4: 'Miedo', peso: .5, valor: 250},
  {id: "Corazón de Espino", efecto1: 'Restaurar Magia',  efecto2: 'Reforzar Bloqueo', efecto3: 'Paralisis', efecto4: 'Reforzar Magia', peso: .5, valor: 20},
  {id: "Corazón humano", efecto1: 'Dañar Salud',  efecto2: 'Dañar Magia', efecto3: 'Dañar Regeneración Magica', efecto4: 'Frenesí', peso: 1, valor: 0},
  {id: "Cornamenta Grande", efecto1: 'Restaurar Aguante',  efecto2: 'Reforzar Aguante', efecto3: 'Ralentizar', efecto4: 'Dañar Regeneración de Aguante', peso: .1, valor: 2},
  {id: "Cornamenta Pequeña", efecto1: 'Debilidad al Veneno',  efecto2: 'Reforzar Restauración', efecto3: 'Daño Persistente al Aguante', efecto4: 'Dañar Salud', peso: .1, valor: 2},
  {id: "Corona Sangrante", efecto1: 'Debilidad al Fuego',  efecto2: 'Reforzar Bloqueo', efecto3: 'Debilidad al Veneno', efecto4: 'Resistencia a la Magia', peso: .3, valor: 10},
  {id: "Dedo de Gigante", efecto1: 'Dañar Aguante',  efecto2: 'Reforzar Salud', efecto3: 'Reforzar Capacidad de Carga', efecto4: 'Dañar Regeneración de Aguante', peso: 1, valor: 20},
  {id: "Diente de Gato Sable", efecto1: 'Restaurar Aguante',  efecto2: 'Reforzar Armadura Pesada', efecto3: 'Reforzar Herrería', efecto4: 'Debilidad al Veneno', peso: .1, valor: 2},
  {id: "Dientes de Espectro del Hielo", efecto1: 'Debilidad a la Escarcha',  efecto2: 'Reforzar Armadura Pesada', efecto3: 'Invisibilidad', efecto4: 'Debilidad al Fuego', peso: .3, valor: 30},
  {id: "Ectoplasma", efecto1: 'Restaurar Magia',  efecto2: 'Reforzar Destrucción', efecto3: 'Reforzar Magia', efecto4: 'Dañar Salud', peso: .1, valor: 25},
  {id: "Enseres de fuego fatuo", efecto1: 'Restaurar Magia',  efecto2: 'Reforzar Destrucción', efecto3: 'Reforzar Capacidad de Carga', efecto4: 'Resistencia a la Magia', peso: .1, valor: 2},
  {id: "Envoltorio de Colmena", efecto1: 'Resistencia al Veneno',  efecto2: 'Reforzar Armadura Ligera', efecto3: 'Reforzar Discreción', efecto4: 'Reforzar Destrucción', peso: 1, valor: 5},
  {id: "Escamas de Pez Asesino", efecto1: 'Resistencia a la Escarcha',  efecto2: 'Daño Persistente a la Salud', efecto3: 'Reforzar Armadura Pesada', efecto4: 'Reforzar Bloqueo', peso: .1, valor: 3},
  {id: "Flor azul de montaña", efecto1: 'Restaurar Salud',  efecto2: 'Reforzar Conjuración', efecto3: 'Fotalecer Salud', efecto4: 'Dañar Regeneración Magica', peso: .1, valor: 2},
  {id: "Flor púrpura de montaña", efecto1: 'Restaurar Aguante',  efecto2: 'Reforzar Discreción', efecto3: 'Daño Persistente a la Magia', efecto4: 'Resistencia a la Escarcha', peso: .1, valor: 2},
  {id: "Flor roja de montaña", efecto1: 'Restaurar Magia',  efecto2: 'Disminuir Magia', efecto3: 'Reforzar Magia', efecto4: 'Dañar Salud', peso: .1, valor: 2},
  {id: "Foliota escamosa", efecto1: 'Debilidad a la Magia',  efecto2: 'Reforzar Ilusión', efecto3: 'Regenerar Aguante', efecto4: 'Reforzar Capacidad de Carga', peso: .3, valor: 4},
  {id: "Frutos de enebro", efecto1: 'Debilidad al Fuego',  efecto2: 'Reforzar Arquería', efecto3: 'Regenerar Salud', efecto4: 'Dañar Regeneración de Aguante', peso: .1, valor: 1},
  {id: "Garra de Bruja Cuervo", efecto1: 'Resistencia a la Magia',  efecto2: 'Daño Persistente a la Magia', efecto3: 'Reforzar Encantamiento', efecto4: 'Reforzar Elocuencia', peso: .3, valor: 20},
  {id: "Garras de Oso", efecto1: 'Restaurar Aguante',  efecto2: 'Reforzar Salud', efecto3: 'Reforzar a una Mano', efecto4: 'Dañar Regeneración Magica', peso: .1, valor: 2},
  {id: "Grasa de Trol", efecto1: 'Resistencia al Veneno',  efecto2: 'Reforzar Dos Manos', efecto3: 'Frenesí', efecto4: 'Dañar Salud', peso: 1, valor: 15},
  {id: "Heces de diablillo", efecto1: 'Dañar Salud',  efecto2: 'Daño Persistente a la Salud', efecto3: 'Paralisis', efecto4: 'Restaurar Salud', peso: .3, valor: 0},
  {id: "Huevo de acantiza minero", efecto1: 'Restaurar Salud',  efecto2: 'Reforzar a una Mano', efecto3: 'Dañar Aguante', efecto4: 'Debilidad a la Magia', peso: .5, valor: 2},
  {id: "Huevo de Araña", efecto1: 'Dañar Aguante',  efecto2: 'Dañar Regeneración Magica', efecto3: 'Reforzar Abrir Cerraduras', efecto4: 'Reforzar Arquería', peso: .2, valor: 5},
  {id: "Huevo de Gallina", efecto1: 'Resistencia a la Magia',  efecto2: 'Dañar Regeneración Magica', efecto3: 'Respiración Acuatica', efecto4: 'Daño Persistente al Aguante', peso: .5, valor: 2},
  {id: "Huevo de Pez Asesino", efecto1: 'Resistencia al Veneno',  efecto2: 'Reforzar Robo', efecto3: 'Daño Persistente a la Salud', efecto4: 'Reforzar Aguante', peso: .2, valor: 3},
  {id: "Huevo de zorzal", efecto1: 'Restaurar Aguante',  efecto2: 'Reforzar Abrir Cerraduras', efecto3: 'Debilidad al Veneno', efecto4: 'Resistencia a la Descarga', peso: .5, valor: 2},
  {id: "Huevos de Cauro", efecto1: 'Debilidad al Veneno',  efecto2: 'Reforzar Aguante', efecto3: 'Dañar Magia', efecto4: 'Invisibilidad', peso: .2, valor: 10},
  {id: "Lavanda", efecto1: 'Resistencia a la Magia',  efecto2: 'Reforzar Aguante', efecto3: 'Disminuir Magia', efecto4: 'Reforzar Conjuración', peso: .1, valor: 1},
  {id: "Lengua de Dragón", efecto1: 'Resistencia al Fuego',  efecto2: 'Reforzar Elocuencia', efecto3: 'Reforzar Ilusión', efecto4: 'Reforzar Dos Manos', peso: .1, valor: 5},
  {id: "Liquen Gigante", efecto1: 'Debilidad a la Descarga',  efecto2: 'Disminuir Salud', efecto3: 'Debilidad al Veneno', efecto4: 'Restaurar Magia', peso: .3, valor: 5},
  {id: "Mirriam de escarcha", efecto1: 'Resistencia a la Escarcha',  efecto2: 'Reforzar Discreción', efecto3: 'Disminuir Magia', efecto4: 'Dañar Regeneración de Aguante', peso: .1, valor: 1},
  {id: "Montón de Sal", efecto1: 'Debilidad a la Magia',  efecto2: 'Reforzar Restauración', efecto3: 'Ralentizar', efecto4: 'Regenerar Magia', peso: .2, valor: 2},
  {id: "Mora Tapinella", efecto1: 'Restaurar Magia',  efecto2: 'Daño Persistente a la Salud', efecto3: 'Regenerar Aguante', efecto4: 'Reforzar Ilusión', peso: .3, valor: 4},
  {id: "Musgo Colgante", efecto1: 'Dañar Magia',  efecto2: 'Reforzar Salud', efecto3: 'Dañar Regeneración Magica', efecto4: 'Reforzar a una Mano', peso: .3, valor: 1},
  {id: "Ojo de Gato Sable", efecto1: 'Restaurar Aguante',  efecto2: 'Disminuir Salud', efecto3: 'Dañar Magia', efecto4: 'Restaurar Salud', peso: .1, valor: 2},
  {id: "Oreja de Elfo", efecto1: 'Restaurar Magia',  efecto2: 'Reforzar Arquería', efecto3: 'Debilidad a la Escarcha', efecto4: 'Resistencia al Fuego', peso: .1, valor: 10},
  {id: "Oreja de Falmer", efecto1: 'Dañar Salud',  efecto2: 'Frenesí', efecto3: 'Resistencia al Veneno', efecto4: 'Reforzar Abrir Cerraduras', peso: .2, valor: 10},
  {id: "Panal", efecto1: 'Restaurar Aguante',  efecto2: 'Reforzar Bloqueo', efecto3: 'Reforzar Armadura Ligera', efecto4: 'Disminuir Aguante', peso: 1, valor: 5},
  {id: "Perca de Lomo Plateado", efecto1: 'Restaurar Aguante',  efecto2: 'Dañar Regeneración de aguante', efecto3: 'Disminuir Salud', efecto4: 'Resistencia a la Escarcha', peso: .3, valor: 15},
  {id: "Percebe Nórdico", efecto1: 'Dañar Magia',  efecto2: 'Respiración Acuatica', efecto3: 'Regenerar Salud', efecto4: 'Reforzar Robo', peso: .2, valor: 5},
  {id: "Perla", efecto1: 'Restaurar Aguante',  efecto2: 'Reforzar Bloqueo', efecto3: 'Restaurar Magia', efecto4: 'Resistencia a la Descarga', peso: .1, valor: 2},
  {id: "Perla Pequeña", efecto1: 'Restaurar Aguante',  efecto2: 'Reforzar a una Mano', efecto3: 'Reforzar Restauración', efecto4: 'Resistencia a la Escarcha', peso: .1, valor: 2},
  {id: "Pico de Halcón", efecto1: 'Restaurar Aguante',  efecto2: 'Resistencia a la Escarcha', efecto3: 'Reforzar Capacidad de Carga', efecto4: 'Resistencia a la Descarga', peso: .3, valor: 15},
  {id: "Piel Chamuscada de Skeever", efecto1: 'Restaurar Aguante',  efecto2: 'Curar Enfermedad', efecto3: 'Resistencia al Veneno', efecto4: 'Restaurar Salud', peso: .5, valor: 1},
  {id: "Pluma de Halcón", efecto1: 'Curar Enfermedad',  efecto2: 'Reforzar Armadura Ligera', efecto3: 'Reforzar a una Mano', efecto4: 'Reforzar Discreción', peso: .1, valor: 15},
  {id: "Plumas de bruja cuervo", efecto1: 'Dañar Magia',  efecto2: 'Reforzar Conjuración', efecto3: 'Frenesí', efecto4: 'Debilidad a la Descarga', peso: .1, valor: 20},
  {id: "Polvo Brillante", efecto1: 'Dañar Magia',  efecto2: 'Dañar Regeneración Magica', efecto3: 'Reforzar Destrucción', efecto4: 'Resistencia a la Descarga', peso: .5, valor: 20},
  {id: "Polvo de Hueso", efecto1: 'Dañar Aguante',  efecto2: 'Resistencia al Fuego', efecto3: 'Reforzar Conjuración', efecto4: 'Disminuir Aguante', peso: .5, valor: 5},
  {id: "Polvo de Vampiro", efecto1: 'Invisibilidad',  efecto2: 'Restaurar Magia', efecto3: 'Regenerar Salud', efecto4: 'Curar Enfermedad', peso: .2, valor: 25},
  {id: "Putrefacción de Namira", efecto1: 'Dañar Magia',  efecto2: 'Reforzar Abrir Cerraduras', efecto3: 'Miedo', efecto4: 'Regenerar Salud', peso: .3, valor: 0},
  {id: "Quitina de cangrejo del barro", efecto1: 'Restaurar Aguante',  efecto2: 'Curar Enfermedad', efecto3: 'Resistencia al Veneno', efecto4: 'Resistencia al Fuego', peso: .3, valor: 2},
  {id: "Ramita de Cardo", efecto1: 'Resistencia a la Escarcha',  efecto2: 'Disminuir Aguante', efecto3: 'Resistencia al Veneno', efecto4: 'Reforzar Armadura Pesada', peso: .1, valor: 1},
  {id: "Ranúnculo Encorvado", efecto1: 'Dañar Aguante',  efecto2: 'Frenesí', efecto3: 'Restaurar Salud', efecto4: 'Reforzar Herrería', peso: .2, valor: 12},
  {id: "Raíz canina", efecto1: 'Dañar Aguante',  efecto2: 'Reforzar a una Mano', efecto3: 'Reforzar Arquería', efecto4: 'Paralisis', peso: .1, valor: 5},
  {id: "Raíz de Jarrin(mision)", efecto1: 'Dañar Salud',  efecto2: 'Dañar Magia', efecto3: 'Dañar Aguante', efecto4: 'Dañar Regeneración Magica', peso: .5, valor: 10},
  {id: "Raíz de Nirn", efecto1: 'Dañar Salud',  efecto2: 'Dañar Aguante', efecto3: 'Invisibilidad', efecto4: 'Resistencia a la Magia', peso: .2, valor: 10},
  {id: "Raíz de nirn carmesí", efecto1: 'Dañar Salud',  efecto2: 'Dañar Aguante', efecto3: 'Invisibilidad', efecto4: 'Resistencia a la Magia', peso: .2, valor: 10},
  {id: "Raíz Nudosa", efecto1: 'Debilidad a la Magia',  efecto2: 'Reforzar Ilusión', efecto3: 'Regenerar Magia', efecto4: 'Restaurar Magia', peso: .5, valor: 15},
  {id: "Raíz trepadora", efecto1: 'Restaurar Magia',  efecto2: 'Dañar Regeneración de Aguante', efecto3: 'Reforzar Capacidad de Carga', efecto4: 'Debilidad a la Magia', peso: .2, valor: 1},
  {id: "Sales de escarcha", efecto1: 'Debilidad al Fuego',  efecto2: 'Resistencia a la Escarcha', efecto3: 'Restaurar Magia', efecto4: 'Reforzar Conjuración', peso: .3, valor: 100},
  {id: "Sales de Fuego", efecto1: 'Debilidad a la Escarcha',  efecto2: 'Resistencia al Fuego', efecto3: 'Restaurar Magia', efecto4: 'Regenerar Magia', peso: .3, valor: 50},
  {id: "Sales de Vacio", efecto1: 'Debilidad a la Descarga',  efecto2: 'Resistencia a la Magia', efecto3: 'Dañar Salud', efecto4: 'Reforzar Magia', peso: .2, valor: 125},
  {id: "Savia de Spriggan", efecto1: 'Dañar Regeneración Magica',  efecto2: 'Reforzar Encantamiento', efecto3: 'Reforzar Herrería', efecto4: 'Reforzar Alteración', peso: .2, valor: 5},
  {id: "Semilla de hierba", efecto1: 'Resistencia al Veneno',  efecto2: 'Disminuir Magia', efecto3: 'Reforzar Alteración', efecto4: 'Restaurar Magia', peso: .1, valor: 1},
  {id: "Seta Brillante", efecto1: 'Resistencia a la Descarga',  efecto2: 'Reforzar Destrucción', efecto3: 'Reforzar Herrería', efecto4: 'Reforzar Salud', peso: .2, valor: 5},
  {id: "Sinforicarpos", efecto1: 'Resistencia al Fuego',  efecto2: 'Reforzar Encantamiento', efecto3: 'Resistencia a la Escarcha', efecto4: 'Resistencia a la Descarga', peso: .1, valor: 4},
  {id: "Trigo", efecto1: 'Restaurar Salud',  efecto2: 'Reforzar Salud', efecto3: 'Dañar Regeneración de Aguante', efecto4: 'Daño Persistente a la Magia', peso: .1, valor: 5},
  {id: "Tórax de Luciérnaga", efecto1: 'Restaurar Aguante',  efecto2: 'Daño Persistente a la Magia', efecto3: 'Debilidad a la Magia', efecto4: 'Reforzar Aguante', peso: .1, valor: 1},
  {id: "Uvas de Jazbay", efecto1: 'Debilidad a la Magia',  efecto2: 'Reforzar Magia', efecto3: 'Regenerar Magia', efecto4: 'Disminuir Salud', peso: .1, valor: 1},
  {id: "Vaina Fúngica del Pantano", efecto1: 'Resistencia a la Descarga',  efecto2: 'Daño Persistente a la Magia', efecto3: 'Paralisis', efecto4: 'Restaurar Salud', peso: .5, valor: 3},
  /*dragonborn*/
  {id: 'Ceniza de engendro', efecto1: 'Dañar Aguante', efecto2: 'Resistencia al Fuego', efecto3: 'Reforzar Encantamiento', efecto4: 'Dañar Magia', peso: .1, valor: 20},
  {id: 'Colmillo de jabalí', efecto1: 'Reforzar Aguante', efecto2: 'Reforzar Salud', efecto3: 'Reforzar Bloqueo', efecto4: 'Frenesí', peso: .5, valor: 20},
  {id: 'Jalea de netch', efecto1: 'Paralisis', efecto2: 'Reforzar Capacidad de Carga', efecto3: 'Restaurar Aguante', efecto4: 'Miedo', peso: .5, valor: 20},
  {id: 'Jalea de saltador de cenizas', efecto1: 'Regenerar Salud', efecto2: 'Reforzar Armadura Ligera', efecto3: 'Resistencia a la Descarga', efecto4: 'Debilidad a la Escarcha', peso: .25, valor: 20},
  {id: 'Madera de spriggan quemado', efecto1: 'Debilidad al fuego', efecto2: 'Reforzar alteración', efecto3: 'Dañar Regeneración Magica', efecto4: 'Ralentizar', peso: .5, valor: 20},
  {id: 'Musgo de parasol de emperador', efecto1: 'Dañar salud', efecto2: 'Reforzar magia', efecto3: 'Regenerar Salud', efecto4: 'Reforzar a dos manos', peso: .25, valor: 1},
  {id: 'Plumas de golondrina marina de Felsaad', efecto1: 'Restaurar salud', efecto2: 'Reforzar Armadura Ligera', efecto3: 'Curar enfermedad', efecto4: 'Resistir magia', peso: .1, valor: 15},
  {id: 'Raíz de trama', efecto1: 'Debilidad a la descarga', efecto2: 'Reforzar Capacidad de Carga', efecto3: 'Dañar Magia', efecto4: 'Ralentizar', peso: .2, valor: 1},
  {id: 'Raíz trepadora cenicienta', efecto1: 'Dañar Aguante', efecto2: 'Invisibilidad', efecto3: 'Resistencia al Fuego', efecto4: 'Reforzar destrucción', peso: .25, valor: 20},
  {id: 'Rascabuches', efecto1: 'Dañar salud', efecto2: 'Dañar Aguante', efecto3: 'Dañar Magia', efecto4: 'Daño Persistente a la salud', peso: .1, valor: 1},
  {id: 'Semilla de hierba cenicienta', efecto1: 'Resistencia al Fuego', efecto2: 'Debilidad a la descarga', efecto3: 'Reforzar abrir cerraduras', efecto4: 'Reforzar discreción', peso: .1, valor: 1},
  /*dawnguard*/
  {id: 'Ala de polilla ancestral', efecto1: 'Dañar Aguante', efecto2: 'Reforzar conjuración', efecto3: 'dañar regeneración magica', efecto4: 'Reforzar Encantamiento', peso: .1, valor: 2},
  {id: 'Antena de cauro cazador', efecto1: 'Dañar Aguante', efecto2: 'Reforzar conjuración', efecto3: 'dañar regeneración magica', efecto4: 'Reforzar Encantamiento', peso: .1, valor: 2},
  {id: 'Flor brillante', efecto1: 'Resistencia a la magia', efecto2: 'Miedo', efecto3:	'Regenerar Salud' , efecto4: 'paralisis', peso: .1, valor: 5},
  {id: 'Flor venenosa', efecto1: 'Dañar salud', efecto2: 'Ralentizar', efecto3: 'Reforzar cargar peso', efecto4: 'Miedo', peso: .1, valor: 5},
  {id: 'Flor amarilla de montaña', efecto1: 'Resistencia al veneno', efecto2: 'Reforzar restauración', efecto3: 'Reforzar Salud', efecto4: 'Dañar regeneración de aguante', peso: .1, valor: 2},
]
const efectos =[
    {idf: "curar enfermedad", costo:.5, magnitud:5, duracion:0, valor:21},
    {idf: "Paralisis", costo:500, magnitud:0, duracion:1, valor:285},
    {idf: "Invisibilidad", costo:100, magnitud:0, duracion:4, valor:261},
    {idf: "Dañar Salud", costo:3, magnitud:2, duracion:1, valor:3},
    {idf: "Dañar magia", costo:22, magnitud:3, duracion:0, valor:52},
    {idf: "Ralentizar", costo:1, magnitud:50, duracion:5, valor:247},
    {idf: "Dañar Regeneración Magica", costo:0.5, magnitud:100, duracion:5, valor:265},
    {idf: "Dañar Regeneración de aguante", costo:0.3, magnitud:100, duracion:5, valor:159}
 ]
/*Arreglo de Objetos */
/*Busqueda ingredientes*/
 $('#search').keyup(function(){
             var searchField = $(this).val();
 		          if(searchField === ''){
 		              $('#ing').html('');
 		                return;
 		                }
         var regex = new RegExp(searchField, "i");
         var output = '';
         var count = 1;
 	  $.each(ingredientes, function(key, val){
 		if ((val.id.search(regex) != -1) || (val.efecto1.search(regex) != -1) || (val.efecto2.search(regex) != -1)
    || (val.efecto3.search(regex) != -1)|| (val.efecto4.search(regex) != -1)) {
    output += '<div><div class="id">-' + val.id + '-</div>';
 	  output += '<div class="f1">' + val.efecto1 + '</div>';
    output += '<div class="f2">' + val.efecto2 + '</div>';
    output += '<div class="f3">' + val.efecto3 + '</div>';
    output += '<div class="f4">' + val.efecto4 + '</div></div>'
    }
 	 });
 	  output += '';
 	$('#ing').html(output);
});
/*Busqueda ingredientes*/
/*Busqueda efectos*/
$('#busefe').keyup(function(){
            var searchField = $(this).val();
             if(searchField === '')  {
                 $('#efe').html('');
                   return;
                   }
        var regex = new RegExp(searchField, "i");
        var output = '';
        var count = 1;
   $.each(efectos, function(key, val){
   if ((val.idf.search(regex) != -1) ) {
   output += '<div class="line"><div>' + val.idf + '</div>';
   output += '<div>' + val.costo + '</div>';
   output += '<div>' + val.magnitud + '</div>';
   output += '<div>' + val.duracion + '</div>';
   output += '<div>' + val.valor + '</div></div>'
    }
  });
   output += '';
 $('#efe').html(output);
});
/*Busqueda efectos*/


// var ing = ingredientes.map(function(ver){
//   return '<div><div class="ind">'
//           +ver.id+'</div><div class="val">'+
//           ver.valor+'</div><div class="f1">'+
//           ver.efecto1+'</div><div class="f2">'+
//           ver.efecto2+'</div><div class="f3">'+
//           ver.efecto3+'</div><div class="f4">'+
//           ver.efecto4+'</div></div>'
// })
// document.getElementById("ing").innerHTML = ing.join('');
})/*End of line*/
