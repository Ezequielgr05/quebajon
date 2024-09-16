import React from 'react'
import '../components-css/Ingredientes.css'
import aceite from '../assets/img/icons/aceite.ico';
import aceituna from '../assets/img/icons/aceituna.ico';
import ajo from '../assets/img/icons/ajo.ico';
import albahaca from '../assets/img/icons/albahaca.ico';
import apio from '../assets/img/icons/apio.ico';
import arvejas from '../assets/img/icons/arvejas.ico';
import arroz from '../assets/img/icons/arroz.ico';
import azucar from '../assets/img/icons/azucar.ico';
import banana from '../assets/img/icons/banana.ico';
import batata from '../assets/img/icons/batata.ico';
import berenjena from '../assets/img/icons/berenjena.ico';
import brocoli from '../assets/img/icons/brocoli.ico';
import cacaoEnPolvo from '../assets/img/icons/cacaoEnPolvo.ico';
import calabaza from '../assets/img/icons/calabaza.ico';
import canela from '../assets/img/icons/canela.ico';
import carne from '../assets/img/icons/carne.ico';
import cebolla from '../assets/img/icons/cebolla.ico';
import cebollaDeVerdeo from '../assets/img/icons/cebollaDeVerdeo.ico';
import champiñones from '../assets/img/icons/champiñones.ico';
import choclo from '../assets/img/icons/choclo.ico';
import chocolate from '../assets/img/icons/chocolate.ico';
import coliflor from '../assets/img/icons/coliflor.ico';
import cremaDeLeche from '../assets/img/icons/cremaDeLeche.ico';
import durazno from '../assets/img/icons/durazno.ico';
import espinaca from '../assets/img/icons/espinaca.ico';
import harina from '../assets/img/icons/harina.ico';
import huevo from '../assets/img/icons/huevo.ico';
import jengibre from '../assets/img/icons/jengibre.ico';
import ketchup from '../assets/img/icons/ketchup.ico';
import laurel from '../assets/img/icons/laurel.ico';
import lechuga from '../assets/img/icons/lechuga.ico';
import leche from '../assets/img/icons/leche.ico';
import lentejas from '../assets/img/icons/lentejas.ico';
import limon from '../assets/img/icons/limon.ico';
import mandarina from '../assets/img/icons/mandarina.ico';
import manzana from '../assets/img/icons/manzana.ico';
import manteca from '../assets/img/icons/manteca.ico';
import mayonesa from '../assets/img/icons/mayonesa.ico';
import miel from '../assets/img/icons/miel.ico';
import mostaza from '../assets/img/icons/mostaza.ico';
import naranja from '../assets/img/icons/naranja.ico';
import nueces from '../assets/img/icons/nueces.ico';
import oregano from '../assets/img/icons/oregano.ico';
import papa from '../assets/img/icons/papa.ico';
import pan from '../assets/img/icons/pan.ico';
import panRallado from '../assets/img/icons/panRallado.ico';
import pasas from '../assets/img/icons/pasas.ico';
import fideos from '../assets/img/icons/fideos.ico';
import pepino from '../assets/img/icons/pepino.ico';
import perejil from '../assets/img/icons/perejil.ico';
import pescado from '../assets/img/icons/pescado.ico';
import pimienta from '../assets/img/icons/pimienta.ico';
import pimiento from '../assets/img/icons/pimiento.ico';
import pera from '../assets/img/icons/pera.ico';
import pollo from '../assets/img/icons/pollo.ico';
import porotos from '../assets/img/icons/porotos.ico';
import pureDeTomate from '../assets/img/icons/pureDeTomate.ico';
import puerro from '../assets/img/icons/puerro.ico';
import queso from '../assets/img/icons/queso.ico';
import remolacha from '../assets/img/icons/remolacha.ico';
import ricota from '../assets/img/icons/ricota.ico';
import romero from '../assets/img/icons/romero.ico';
import sal from '../assets/img/icons/sal.ico';
import semillas from '../assets/img/icons/semillas.ico';
import tomate from '../assets/img/icons/tomate.ico';
import tomillo from '../assets/img/icons/tomillo.ico';
import vinagre from '../assets/img/icons/vinagre.ico';
import yogurt from '../assets/img/icons/yogurt.ico';
import zanahoria from '../assets/img/icons/zanahoria.ico';
import zapallito from '../assets/img/icons/zapallito.ico';

const foodIcons = {
    'Aceite': aceite,
    'Aceituna': aceituna,
    'Ajo': ajo,
    'Albahaca': albahaca,
    'Apio': apio,
    'Arvejas': arvejas,
    'Arroz': arroz,
    'Azúcar': azucar,
    'Banana': banana,
    'Batata': batata,
    'Berenjena': berenjena,
    'Brócoli': brocoli,
    'Cacao en polvo': cacaoEnPolvo,
    'Calabaza': calabaza,
    'Canela': canela,
    'Carne': carne,
    'Cebolla': cebolla,
    'Cebolla de verdeo': cebollaDeVerdeo,
    'Champiñones': champiñones,
    'Choclo': choclo,
    'Chocolate': chocolate,
    'Coliflor': coliflor,
    'Crema de leche': cremaDeLeche,
    'Durazno': durazno,
    'Espinaca': espinaca,
    'Fideos': fideos,
    'Harina': harina,
    'Huevo': huevo,
    'Jengibre': jengibre,
    'Ketchup': ketchup,
    'Laurel': laurel,
    'Lechuga': lechuga,
    'Leche': leche,
    'Lentejas': lentejas,
    'Limón': limon,
    'Mandarina': mandarina,
    'Manzana': manzana,
    'Manteca': manteca,
    'Mayonesa': mayonesa,
    'Miel': miel,
    'Mostaza': mostaza,
    'Naranja': naranja,
    'Nueces': nueces,
    'Orégano': oregano,
    'Papa': papa,
    'Pan': pan,
    'Pan rallado': panRallado,
    'Pasas': pasas,
    'Pepino': pepino,
    'Perejil': perejil,
    'Pescado': pescado,
    'Pimienta': pimienta,
    'Pimiento': pimiento,
    'Pera': pera,
    'Pollo': pollo,
    'Porotos': porotos,
    'Puré de tomate': pureDeTomate,
    'Puerro': puerro,
    'Queso': queso,
    'Remolacha': remolacha,
    'Ricota': ricota,
    'Romero': romero,
    'Sal': sal,
    'Semillas': semillas,
    'Tomate': tomate,
    'Tomillo': tomillo,
    'Vinagre': vinagre,
    'Yogurt': yogurt,
    'Zanahoria': zanahoria,
    'Zapallito': zapallito
};

function switchedIconFood(title, classIcon) {
    const iconSrc = foodIcons[title];
    return iconSrc ? (
        <div className={classIcon}>
            <div><img src={iconSrc} alt={`icono de ${title}`} /></div>
            <p>{title}</p>
        </div>
    ) : null;
}

function Ingredientes({title, type, size, darkmode=false}) {
  let classIcon = `icon-${size}-${type}`;

  if (darkmode) {
    classIcon = `darkmode-${type} icon-${size}-${type}`;
  }
  
  return (switchedIconFood(title, classIcon))
}

export default Ingredientes