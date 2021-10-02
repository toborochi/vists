import {ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Data, DataSet, VisNetworkService, Node, Edge} from 'ngx-vis';
import {Options} from 'vis-network';
import {DOCUMENT} from '@angular/common';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  title = 'vis';
  public visNetwork = 'networkId1';
  public visNetworkData: Data ;
  public nodes: DataSet<Node> ;
  public edges: DataSet<Edge> ;
  public visNetworkOptions: Options;


  public constructor(private visNetworkService: VisNetworkService) {
  }

  public networkInitialized(): void {
    // now we can use the service to register on events
    this.visNetworkService.on(this.visNetwork, 'click');

    // open your console/dev tools to see the click params
    this.visNetworkService.click.subscribe((eventData: any[]) => {
      if (eventData[0] === this.visNetwork) {
        console.log(eventData[1]);
      }
    });
  }

  public ngOnInit(): void {
    // tslint:disable-next-line:max-line-length
    this.nodes = new DataSet<Node>([{id: '1', label: 'Bolivia Tech Hub', group: 'Cientistas de datos'}, {id: '2', label: 'Pamela Gonzales', group: 'Cientistas de datos'}, {id: '3', label: 'Fundación para el Periodismo', group: 'Periodistas de datos'}, {id: '4', label: 'Fundación Internet Bolivia', group: 'Activistas'}, {id: '5', label: 'AGETIC', group: 'Entidades gubernamentales'}, {id: '6', label: 'Wilfredo Jordan', group: 'Periodistas de datos'}, {id: '7', label: 'Raisa Valda', group: 'Activistas'}, {id: '8', label: 'La Pública', group: 'Periodistas de datos'}, {id: '9', label: 'Hivos', group: 'Organizaciones internacionales'}, {id: '10', label: 'Oxfam', group: 'Organizaciones internacionales'}, {id: '11', label: 'MIGA', group: 'Activistas'}, {id: '12', label: 'Club de Ciencia de Datos Cochabamba', group: 'Cientistas de datos'}, {id: '13', label: 'HackLab Cochabamba', group: 'Activistas'}, {id: '14', label: 'Marcelo Lazarte', group: 'Visualizadores'}, {id: '15', label: 'CERES', group: 'Investigadores'}, {id: '16', label: 'Alex Ojeda', group: 'Investigadores'}, {id: '17', label: 'CIUDADANIA', group: 'Investigadores'}, {id: '18', label: 'Cristian Leon', group: 'Activistas'}, {id: '19', label: 'Fabiola Chambi', group: 'Periodistas de datos'}, {id: '20', label: 'Los Tiempos / LT Data', group: 'Periodistas de datos'}, {id: '21', label: 'El Deber Data', group: 'Periodistas de datos'}, {id: '22', label: 'Wikimedia Bolivia', group: 'Activistas'}, {id: '23', label: 'Olga Lidia Paredes', group: 'Activistas'}, {id: '24', label: 'Entreparentesys', group: 'Empresa'}, {id: '25', label: 'Josó Chuve', group: 'Activistas'}, {id: '26', label: 'Open Street Map', group: 'Activistas'}, {id: '27', label: 'GeoBolivia', group: 'Entidades gubernamentales'}, {id: '28', label: 'x1', group: 'Cientistas de datos'}, {id: '29', label: 'Pablo Andrós Rivero', group: 'Periodistas de datos'}, {id: '30', label: 'CIS', group: 'Entidades gubernamentales'}, {id: '31', label: 'x2', group: 'Cientistas de datos'}, {id: '32', label: 'Fundación CONSTRUIR', group: 'Activistas'}, {id: '36', label: 'Escuela de Datos', group: 'Cientistas de datos'}, {id: '38', label: 'HacksHackers', group: 'Cientistas de datos'}, {id: '39', label: 'Ayar Paco', group: 'Cientistas de datos'}, {id: '41', label: 'Warmi Red', group: 'Activistas'}, {id: '42', label: 'Lab TecnoSocial', group: 'Investigadores'}, {id: '43', label: 'Svetlana Salvatierra', group: 'Periodistas de datos'}, {id: '44', label: 'Jessica Vargas', group: 'Periodistas de datos'}, {id: '45', label: 'Ronald Catari', group: 'Periodistas de datos'}, {id: '47', label: 'Luis Rejas', group: 'Activistas'}, {id: '48', label: 'Mós y Mejor Internet', group: 'Activistas'}, {id: '49', label: 'Fundación JIDESA', group: 'Investigadores'}, {id: '50', label: 'Fundación ARU', group: 'Investigadores'}, {id: '52', label: 'Marco Antonio Frias', group: 'Visualizadores'}, {id: '53', label: 'Miriam Jemio', group: 'Activistas'}, {id: '54', label: 'Bolivian Mind Blockchain', group: 'Activistas'}, {id: '55', label: 'Alejandro Salamanca', group: 'Activistas'}, {id: '100', label: 'La Razon', group: 'Periodistas de datos'}, {id: '101', label: 'ANF', group: 'Periodistas de datos'}, {id: '102', label: 'Cleidy Torrez', group: 'Periodistas de datos'}, {id: '103', label: 'Fundacion Gobierno Abierto', group: 'Investigadores'}, {id: '104', label: 'Alejandro Balcazar', group: 'Investigadores'}, {id: '105', label: 'CEDIB', group: 'Investigadores'}, {id: '106', label: 'Comunidad de Software Libre Bolivia', group: 'Activistas'}, {id: '107', label: 'HackLab ór00thouseó', group: 'Activistas'}, {id: '108', label: 'Pablo Jordan', group: 'Cientistas de datos'}, {id: '109', label: 'Oscar Contreras', group: 'Cientistas de datos'}, {id: '110', label: 'Gabriela Urquieta', group: 'Cientistas de datos'}, {id: '111', label: 'Edwin Salcedo', group: 'Cientistas de datos'}, {id: '112', label: 'Rafael Lopez', group: 'Cientistas de datos'}, {id: '113', label: 'Tribunal Supremo Electoral', group: 'Entidades gubernamentales'}, {id: '114', label: 'Fabian Espinoza', group: 'Activistas'}, {id: '115', label: 'Club de Ciencia de Datos La Paz', group: 'Cientistas de datos'}, {id: '116', label: 'Club de Ciencia de Datos Oruro', group: 'Cientistas de datos'}, {id: '117', label: 'Women in Machine Learning & Data Science Bolivia', group: 'Cientistas de datos'}, {id: '118', label: 'Py Ladies La Paz', group: 'Cientistas de datos'}, {id: '119', label: 'Cochabamba.ai', group: 'Cientistas de datos'}, {id: '120', label: 'La Paz.ai', group: 'Cientistas de datos'}, {id: '121', label: 'Python La Paz', group: 'Cientistas de datos'}, {id: '122', label: 'R Ladies', group: 'Cientistas de datos'}, {id: '123', label: 'Nathaly Alarcon', group: 'Cientistas de datos'}, {id: '124', label: 'UCB', group: 'Educación superior'}, {id: '125', label: 'Jalasoft', group: 'Empresa'}, {id: '126', label: 'Univalle', group: 'Educación superior'}, {id: '127', label: 'City.ai', group: 'Empresa'}, {id: '128', label: 'Fernando Silva', group: 'Cientistas de datos'}, {id: '129', label: 'INE', group: 'Entidades gubernamentales'}, {id: '130', label: 'Ticracia', group: 'Cientistas de datos'}, {id: '131', label: 'Lesly Zerna', group: 'Cientistas de datos'}]);
    // tslint:disable-next-line:max-line-length
    this.edges = new DataSet<Edge>([{from: '1', to: '9'}, {from: '1', to: '10'}, {from: '7', to: '36'}, {from: '4', to: '18'}, {from: '2', to: '36'}, {from: '2', to: '1'}, {from: '3', to: '6'}, {from: '3', to: '29'}, {from: '5', to: '6'}, {from: '5', to: '7'}, {from: '8', to: '14'}, {from: '7', to: '3'}, {from: '7', to: '8'}, {from: '8', to: '20'}, {from: '8', to: '9'}, {from: '8', to: '10'}, {from: '8', to: '38'}, {from: '10', to: '9'}, {from: '10', to: '38'}, {from: '11', to: '9'}, {from: '14', to: '19'}, {from: '15', to: '17'}, {from: '15', to: '20'}, {from: '16', to: '15'}, {from: '16', to: '12'}, {from: '19', to: '7'}, {from: '19', to: '20'}, {from: '22', to: '26'}, {from: '23', to: '22'}, {from: '23', to: '26'}, {from: '5', to: '12'}, {from: '27', to: '26'}, {from: '29', to: '10'}, {from: '30', to: '10'}, {from: '17', to: '20'}, {from: '17', to: '30'}, {from: '7', to: '1'}, {from: '9', to: '14'}, {from: '39', to: '16'}, {from: '9', to: '38'}, {from: '9', to: '19'}, {from: '10', to: '14'}, {from: '12', to: '39'}, {from: '13', to: '16'}, {from: '7', to: '14'}, {from: '14', to: '38'}, {from: '18', to: '8'}, {from: '18', to: '30'}, {from: '41', to: '7'}, {from: '41', to: '14'}, {from: '42', to: '16'}, {from: '8', to: '19'}, {from: '43', to: '3'}, {from: '43', to: '38'}, {from: '43', to: '9'}, {from: '43', to: '5'}, {from: '44', to: '20'}, {from: '47', to: '48'}, {from: '47', to: '3'}, {from: '47', to: '5'}, {from: '52', to: '26'}, {from: '53', to: '8'}, {from: '53', to: '5'}, {from: '47', to: '55'}, {from: '100', to: '11'}, {from: '131', to: '127'}, {from: '101', to: '11'}, {from: '108', to: '130'}, {from: '102', to: '45'}, {from: '103', to: '104'}, {from: '105', to: '20'}, {from: '106', to: '5'}, {from: '106', to: '7'}, {from: '106', to: '47'}, {from: '106', to: '13'}, {from: '106', to: '4'}, {from: '109', to: '12'}, {from: '109', to: '39'}, {from: '110', to: '9'}, {from: '110', to: '11'}, {from: '110', to: '111'}, {from: '111', to: '9'}, {from: '111', to: '11'}, {from: '112', to: '32'}, {from: '112', to: '113'}, {from: '112', to: '114'}, {from: '115', to: '12'}, {from: '115', to: '116'}, {from: '115', to: '39'}, {from: '115', to: '109'}, {from: '115', to: '5'}, {from: '116', to: '12'}, {from: '116', to: '39'}, {from: '117', to: '122'}, {from: '117', to: '118'}, {from: '117', to: '123'}, {from: '117', to: '124'}, {from: '118', to: '121'}, {from: '119', to: '125'}, {from: '119', to: '126'}, {from: '119', to: '127'}, {from: '119', to: '123'}, {from: '120', to: '124'}, {from: '120', to: '126'}, {from: '120', to: '127'}, {from: '120', to: '123'}, {from: '121', to: '107'}, {from: '121', to: '128'}, {from: '122', to: '123'}, {from: '102', to: '9'}, {from: '45', to: '9'}, {from: '112', to: '106'}, {from: '108', to: '107'}, {from: '108', to: '121'}, {from: '108', to: '115'}, {from: '108', to: '117'}, {from: '54', to: '106'}, {from: '114', to: '124'}, {from: '114', to: '108'}, {from: '114', to: '106'}, {from: '114', to: '130'}, {from: '114', to: '32'}, {from: '114', to: '47'}, {from: '114', to: '55'}]);
    this.visNetworkData = { nodes: this.nodes, edges: this.edges };

    this.visNetworkOptions = {
      nodes: {
        shape: 'dot',
        mass: 1,
        size: 16,
        shapeProperties: {
          borderRadius: 1
        }
      }
    };
  }

  public ngOnDestroy(): void {
    this.visNetworkService.off(this.visNetwork, 'click');
  }

}
