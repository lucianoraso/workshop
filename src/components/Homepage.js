import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from './reservation-background.jpg';

const FirstLeftText = () => <p>Benvenuti</p>;

const FirstRightText = () => (
  <p>
    L'obiettivo di questo laboratorio è di prendere confidenza con alcuni strumenti del Cloud Pak for Integration  
    <br /> 
    <br/>
API-Led integration è oggi l’approccio maggiormente seguito per realizzare l'integrazione tra applicazioni alla base delle strategie di trasformazione digitale di molte aziende private e istituzioni pubbliche tra cui  l’Istituto. 
<br/> <br />

Attraverso questo approccio è possibile rendere i dati del patrimonio informativo  dell’istituto fruibili come servizi integrabili e consumabili attraverso l’uso di API (Application Programming Interfaces). Si parla in questo caso di DaaS:  Data as a Service.  Su questo argomento sarà basato il nostro workshop.  In particolare ci saranno due momenti: una introduzione alla tecnologia di base per la API-Led Integration, e la realizzazione di un caso d’uso della tecnologia che vi vedrà, con il nostro aiuto e supporto, protagonisti. 
Nella parte introduttiva verranno presentate le tecnologie IBM alla base dell’approccio di integrazione API-Led. 
<br />In particolare si vedranno i prodotti API Connect (APIC) e APP Connect Enterprise (ACE) che gestiscono rispettivamente il ciclo di vita di una API (API Connect) e la realizzazione di pattern di integrazione fruibili come endpoint delle API (APP Connect Enterprise).    Vi racconteremo come oggi l’istituto con successo già usa API Connect per la pubblicazione di API nel catalogo di APIC e il gateway di APIC per enforcement delle policy definite sulle API. 
A questo affiancheremo il componente ACE facendovi apprezzare come gli strumenti NO-CODE forniti con il prodotto rendono immediata la costruzione di flussi di elaborazione e accesso al dato. Vi racconteremo come questo sviluppo si integra con gli strumenti Azure DevOps da voi usati e come il codice prodotto può essere reso disponibile sulla container platform (OpenShift).
Faremo anche un cenno all’utilizzo di API proxy GraphQL realizzabili con APIC e i vantaggi che derivano dal loro utilizzo
<br /><br />
      A seguito della parte introduttiva vi presenteremo un caso studio da realizzare insieme.  Il caso di studio consisiste nel produrre un esempio di “Estrazione dell’Estratto Conto previdenziale come quello fornito dal servizio online di INPS
Il caso d’uso è volutamente semplice per far sì che i partecipanti al workshop possano concentrarsi sull’utilizzo degli strumenti di integrazione; tuttavia, durante il workshop sarà possibile approfondire come affrontare tematiche più complesse come quelle che si affrontano nei casi reali
<br /><br />
Saranno implementate  tre API con lo strumento no-code ACE Designer
	1	API di accesso ai dati dell'utente che sta richiedendo l'estratto conto recuperati da CRM esterno
	2	API per estrazione delle righe dell'estratto conto da un Database DB2 con pubblicazione di un evento su un cluster Kafka
	3	API che orchestra le API al punto 1. e 2.
L’API al punto 3. sarà poi pubblicata su API Connect perché possa esserne gestito il ciclo di vita in ottica di API management per far si che possa essere esposta, con tutte le caratteristiche di sicurezza ecc., come attualmente viene fatto proprio con API Connect dall’IstitutoZZ

    
    </p>
);


const BannerText = () => <h1>IBM Integration workshop 
  
</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="g10"
      color="black"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  )
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
