
import { OpenStreetMapProvider } from 'leaflet-geosearch';

export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    
    const provider = new OpenStreetMapProvider();
    inject('search', msg => return await provider.search({ query: msg })))
  }