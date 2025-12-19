
/**
 * Riot Games Data Dragon API helper
 * Version can be dynamic, but 14.1.1 is used as a safe default for now.
 */
const DD_VERSION = '14.1.1';
const DD_BASE_URL = `https://ddragon.leagueoflegends.com/cdn/${DD_VERSION}/img/champion`;

// Some champion names in Data Dragon differ from their display names
const CHAMPION_NAME_MAP: Record<string, string> = {
    'Wukong': 'MonkeyKing',
    'Renata Glasc': 'Renata',
    'Kog\'Maw': 'KogMaw',
    'Rek\'Sai': 'RekSai',
    'Dr. Mundo': 'DrMundo',
    'Nunu & Willump': 'Nunu',
    'LeBlanc': 'Leblanc',
    'Kha\'Zix': 'Khazix',
    'Fiddlesticks': 'Fiddlesticks',
    'Bel\'Veth': 'Belveth',
    'Cho\'Gath': 'Chogath',
    'Kai\'Sa': 'Kaisa',
    'Vel\'Koz': 'Velkoz',
};

export const getChampionImageUrl = (championName: string): string => {
    if (!championName) return '';

    // Handle special mappings first
    if (CHAMPION_NAME_MAP[championName]) {
        return `${DD_BASE_URL}/${CHAMPION_NAME_MAP[championName]}.png`;
    }

    // Standard formatting: Remove spaces, remove apostrophes, capitalize first letter
    // Most names just need spaces and special chars removed: "Lee Sin" -> "LeeSin"
    const formattedName = championName
        .replace(/[' .]/g, '')
        .split('&')[0]; // Handle names like "Nunu & Willump" generally if not mapped

    return `${DD_BASE_URL}/${formattedName}.png`;
};
