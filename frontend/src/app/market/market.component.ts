import { Component, OnInit } from '@angular/core';
import { MarketService } from '../services/market.service';
import { CommandeService } from '../services/commande.service';
import { HttpClient } from '@angular/common/http';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  posts : any = []
  visible : Boolean = false 
  id_visible : any 
  commande = {
    title :'' ,
    product : '' ,
    client : '' ,
    price : ''


  }
  commande_id : any = []
  user : any = []
  days : any 
  constructor(private mservice : MarketService , private cservice : CommandeService , private http : HttpClient )
  {

  }

  ngOnInit(): void {

      this.mservice.getAll().subscribe(
        res => {this.posts = res;
        console.log(this.posts);
        }
      )
      ;
     this.user =  this.mservice.getAuthDataFromToken()
     console.log(this.user);
     this.commande.client = this.user.fullname
     
  }
  public add() {
    
    
    let fd = new FormData 
    fd.append('title' , this.commande.title)
    fd.append('product' , this.commande.product)
    fd.append('client' , this.commande.client)
    fd.append('price' , this.commande.price)
    console.log(this.commande);
    console.log(this.days);
    
    
   
    console.log(fd);
    this.cservice.addCommand(this.commande).subscribe(res =>{
      console.log('added') ;
      this.commande_id = res ;
      const qrData = 'https://www.shutterstock.com/image-vector/thank-you-hand-drawn-lettering-260nw-1263463690.jpg'; // The data to encode as a QR code
      const qrSize = 50; // The size of the QR code image in millimeters
      const documentDefinition = { content:
         `Bonjour On vous informe que votre commande id : ${this.commande_id._id}  intitulé  a ete bien prise en charge votre commande sera délivré dans 2 ou 3 jours
         
         Pour plus de detais n'hesitez pas de contacter : 29236073 Ou ServiceClienr@Campi.tn` }
    pdfMake.createPdf(documentDefinition).download();
    console.log("pdf works");
   
    
    
    }
      
      )
    
    

   

    
  }
  
 

}
