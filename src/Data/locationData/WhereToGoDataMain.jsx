import {
  anuraWTG,
  arugambayWTG,
  caveTempWTG,
  daladaWTG,
  galleWTG,
  hikkaduwaWTG,
  hortonWTG,
  minneriyaWTG,
  mirissaWTG,
  hikingWTD,
  kiteSurfingWTD,
  safariWTD,
  scubaWTD,
  stiltFishingWTD,
  surfingWTD,
  waterRaftingWTD,
  whaleWatchingWTD,
  waterSportsWTD,
} from './WhereToGoDataStore';

function WhereToGoDataMain(pageTitle) {
  switch (pageTitle) {
    case 'anuradhapura':
      return anuraWTG;
    case 'arugambay':
      return arugambayWTG;
    case 'caveTemple':
      return caveTempWTG;
    case 'dalada':
      return daladaWTG;
    case 'galle':
      return galleWTG;
    case 'hikkaduwa':
      return hikkaduwaWTG;
    case 'hortonPlace':
      return hortonWTG;
    case 'minneriya':
      return minneriyaWTG;
    case 'mirissa':
      return mirissaWTG;
    case 'hiking':
      return hikingWTD;
    case 'kiteSurfing':
      return kiteSurfingWTD;
    case 'safari':
      return safariWTD;
    case 'scubaDiving':
      return scubaWTD;
    case 'stiltFishing':
      return stiltFishingWTD;
    case 'surfing':
      return surfingWTD;
    case 'waterRafting':
      return waterRaftingWTD;
    case 'whaleWatching':
      return whaleWatchingWTD;
    case 'waterSports':
      return waterSportsWTD;
    default:
      return { message: 'somethings wrong' };
  }
}

export default WhereToGoDataMain;
