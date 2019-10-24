import { Component } from '@angular/core';
import { MyStorage } from '../Modeles/MyStorage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public mystorage:MyStorage[];

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20
  };
  
  constructor() {}


  ngOnInit(){
      
    this.mystorage =
    [
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "12345678",
      "idprd": 3,
      "nomprd": "Collier idee cadeau femme",
      "descprd": "La pêche, le brugnon et la nectarine sont les fruits comestibles du pêcher (Prunus persica).",
      "pht1PRD": "https://i2.cdscdn.com/pdt2/2/7/2/1/700x700/sta2009735287272/rw/s925-collier-en-argent-pur-femme-court-design-en-c.jpg",
      "pht2PRD": "https://laparisiennebijoux.com/wp-content/uploads/2016/01/collier-minimaliste-tendance-femme.jpg",
      "pht3PRD": "https://www.mes-bijoux.fr/34724-large_default/collier-femme-bulle-de-crystal-or-jaune-375.jpg",
      "pht4PRD": null,
      "cleprd": "p1, p2, p3"
      },
      "idstg": 12,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 2,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 7,
      "carprd": [
      {
      "stgchar": 7,
      "idchar": 11,
      "qttchar": 10,
      "prixchar": 200000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 12,
      "qttchar": 10,
      "prixchar": 2,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 7,
      "idchar": 13,
      "qttchar": 10,
      "prixchar": 20,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 13,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 4,
      "nomprd": "Colier F.",
      "descprd": "Le noisetier (Corylus avellana)",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/51wxadU633L._UY395_.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 10,
      "carprd": [
      {
      "stgchar": 10,
      "idchar": 19,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 14,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "1234567890",
      "idprd": 1,
      "nomprd": "cleor",
      "descprd": "Kiwi (fruit)",
      "pht1PRD": "https://www.cleor.com/media/catalog/product/cache/1/image/250x/9df78eab33525d08d6e5fb8d27136e95/z/0/z0157570_001.jpg",
      "pht2PRD": null,
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1"
      },
      "idstg": 5,
      "carprd": [
      {
      "stgchar": 5,
      "idchar": 6,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 7,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 5,
      "idchar": 8,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Rouge",
      "volchar": "",
      "tailchar": "52"
      }
      ],
      "likestg": [
      1
      ]
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "",
      "idprd": 6,
      "nomprd": "Brac",
      "descprd": "Le colza est une plante annuelle à fleurs jaunes de la famille des crucifères.",
      "pht1PRD": "https://www.samebijoux.com/wp-content/uploads/2019/01/1045-1000x1000.jpg",
      "pht2PRD": "https://clipchic.com/6292-large_default/bracelet-argent-arbre-de-vie-2-initiale.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2, p3, p4, p5"
      },
      "idstg": 15,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": "123456789",
      "idprd": 2,
      "nomprd": "Grand anneau",
      "descprd": "Le Framboisier est une plante dont le fruit, la framboise.",
      "pht1PRD": "https://www.media-rdc.com/medias/f83ea6755f173f649fbc09649cd1548f/p_580x580/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht2PRD": "https://www.media-rdc.com/medias/c4bcc9094bef348481b8cdc64baa1186/p_204x204/grand-anneau-de-zircon-cubique-bijoux-de-mariage-de-mode-bijoux-femme-bague-de-fiancailles-bague-en-argent-cristal-cadeau-de-fet.jpg",
      "pht3PRD": null,
      "pht4PRD": null,
      "cleprd": "p1, p2"
      },
      "idstg": 11,
      "carprd": [],
      "likestg": []
      },
      {
      "idbrd": 1,
      "prdstg": {
      "codeparprd": null,
      "idprd": 5,
      "nomprd": "bracelet P",
      "descprd": "L'Amandier est une plante sauvage comestible dont le fruit est l'amande.",
      "pht1PRD": "https://images-na.ssl-images-amazon.com/images/I/61cDbHvpoYL._UY395_.jpg",
      "pht2PRD": "https://www.amikado.com/photo/bracelet-chaine-infini-grave.jpg",
      "pht3PRD": "https://i2.cdscdn.com/pdt2/8/9/1/1/700x700/soc2009989791891/rw/bracelet-16-2-cm-infini-zirconia-blanc-argent.jpg",
      "pht4PRD": "https://www.elsalee.fr/3410-large_default/bracelet-infinity.jpg",
      "cleprd": "p1, p2, p3, p4"
      },
      "idstg": 8,
      "carprd": [
      {
      "stgchar": 8,
      "idchar": 14,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Vert",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 15,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Blue",
      "volchar": "",
      "tailchar": "51"
      },
      {
      "stgchar": 8,
      "idchar": 16,
      "qttchar": 10,
      "prixchar": 2000,
      "colchar": "Noir",
      "volchar": "",
      "tailchar": "51"
      }
      ],
      "likestg": [
      2,
      3,
      4
      ]
      }
      ];
}
}
