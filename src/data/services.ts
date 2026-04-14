export interface SurveyService {
  id: string;
  title: string;
  tag: string;
  img: string;
  body: string[];
  bullets: string[];
  detailedDescription?: string;
  benefits?: string[];
  process?: string[];
}

export const services: SurveyService[] = [
  {
    id: 'drone',
    title: 'Drone Surveys',
    tag: 'Aerial',
    img: '/services/drone.jpg',
    body: ['Drone Surveys offer high-precision aerial mapping and data collection, significantly reducing time spent in the field.'],
    bullets: ['High-resolution 3D mapping', 'Rapid data collection', 'Safer for hazardous sites'],
    detailedDescription: 'Aerial drone surveying uses sophisticated UAVs equipped with advanced cameras and sensors (including LiDAR) to capture highly accurate topographic and visual data. This modern approach is faster, safer, and often more cost-effective for large-scale or inaccessible projects.',
    benefits: ['Faster turnaround times', 'Extremely detailed 3D models', 'Reduces on-site safety risks', 'Cost-effective for large areas'],
    process: ['Flight planning and airspace check', 'Ground control point setup', 'Autonomous drone flight and data capture', 'Photogrammetry processing and delivery']
  },
  {
    id: 'alta',
    title: 'ALTA Surveys',
    tag: 'Commercial',
    img: '/services/alta.jpg',
    body: ['Comprehensive survey meeting ALTA/NSPS standards, essential for commercial real estate transactions.'],
    bullets: ['Title commitment review', 'Boundary and easement verification', 'Zoning compliance checks'],
    detailedDescription: 'The ALTA/NSPS Land Title Survey is the highest standard of boundary survey. Primarily used for commercial properties, it provides lenders, title companies, and buyers with an exhaustive picture of the property lines, easements, encumbrances, and improvements.',
    benefits: ['Satisfies commercial lender requirements', 'Identifies hidden easements and encroachments', 'Ensures clear title transfer', 'Highlights potential zoning issues'],
    process: ['In-depth title research', 'Detailed field measurement', 'Mapping of all site improvements', 'Final coordination with title company']
  },
  {
    id: 'asbuilt',
    title: 'As-Built Surveys',
    tag: 'Construction',
    img: '/services/asbuilt.jpg',
    body: ['Post-construction verification mapping to confirm structures and improvements match the original design.'],
    bullets: ['Utility placement verification', 'Foundation checks', 'Compliance with approved plans'],
    detailedDescription: 'As-Built surveys provide a detailed record of a project as it was actually constructed in the field. These are crucial for final inspections, obtaining certificates of occupancy, and ensuring underground utilities are properly mapped for future maintenance.',
    benefits: ['Provides absolute proof of compliance', 'Essential for final municipal approvals', 'Accurate baseline for future renovations', 'Identifies errors before project closeout'],
    process: ['Field measurement of final structures', 'Data comparison against design plans', 'Highlighting of any deviations', 'Final CAD deliverable creation']
  },
  {
    id: 'boundary',
    title: 'Boundary Surveys',
    tag: 'Residential',
    img: '/services/boundary.jpg',
    body: ['Formal identification and establishment of property boundary corners to protect your real estate investment.'],
    bullets: ['Dispute resolution', 'Fencing layout', 'Deed line verification'],
    detailedDescription: 'A boundary survey precisely locates the legal limits of a property based on historical records, deeds, and physical monuments. It is the definitive way to know what you own, preventing costly disputes with neighbors over fences, driveways, or additions.',
    benefits: ['Provides legal protection of property lines', 'Prevents costly encroachment disputes', 'Required for many building permits', 'Gives peace of mind before building'],
    process: ['Extensive deed and historical research', 'Field search for existing monuments', 'Measurement and replacement of missing corners', 'Creation of signed baseline plat']
  },
  {
    id: 'condominium',
    title: 'Condominium Survey',
    tag: 'Residential',
    img: '/services/condominium.jpg',
    body: ['Detailed mapping specifically designed for the creation and management of condominium associations.'],
    bullets: ['Unit boundary definition', 'Common area mapping', 'Association document compliance'],
    detailedDescription: 'Creating a condominium requires specialized surveying to define three-dimensional property limits, distinguishing individual units from common elements. We provide exact interior and exterior measurements to comply with local condominium statutes.',
    benefits: ['Legally separates individual units', 'Defines shared mechanical and common areas', 'Complies strictly with local condo laws', 'Facilitates unit sales and financing'],
    process: ['Review of architectural plans', 'Field measurement of built units', 'Drafting of floor plans and elevations', 'Final surveyor certification']
  },
  {
    id: 'construction',
    title: 'Construction Layout',
    tag: 'Construction',
    img: '/services/construction.jpg',
    body: ['Accurate physical staking and layout of construction plans on the actual job site.'],
    bullets: ['Foundation staking', 'Utility routing', 'Roadway alignment'],
    detailedDescription: 'Construction layout translates paper blueprints into physical ground stakes, guiding contractors exactly where to build. From skyscrapers to residential communities, precision layout prevents catastrophic errors during excavation and concrete pours.',
    benefits: ['Eliminates costly construction rework', 'Keeps projects strictly to timeline', 'Coordinates tightly with machine operators', 'Ensures correct drainage gradients'],
    process: ['Import and coordinate checking of CAD design', 'Setting control points on site', 'Physical staking of structures and utilities', 'Quality control check on all placed stakes']
  },
  {
    id: 'control',
    title: 'Control Survey',
    tag: 'Commercial',
    img: '/services/control.jpg',
    body: ['Establishing a highly accurate network of physical points for subsequent detailed surveying.'],
    bullets: ['GPS networks', 'Baseline establishment', 'Large-scale mapping foundation'],
    detailedDescription: 'A control survey provides the precise framework upon which all other surveys, construction designs, or GIS mappings cover. Utilizing advanced static GPS and highly accurate optical levels, we establish reliable baseline coordinates and elevations.',
    benefits: ['Prevents compound errors over large sites', 'Links project data to state plane coordinates', 'Essential for multi-phase developments', 'Provides long-term reference points'],
    process: ['Reconnaissance and network planning', 'Static GPS and optical observations', 'Rigorous data adjustment and calculation', 'Monumentation and report delivery']
  },
  {
    id: 'elevation',
    title: 'Elevation Certificates',
    tag: 'FEMA',
    img: '/services/elevation.jpg',
    body: ['Official documentation of a structure’s elevation relative to FEMA flood risk data.'],
    bullets: ['Flood zone verification', 'Insurance premium reduction', 'Compliance with local ordinances'],
    detailedDescription: 'Required for properties located in high-risk flood zones, an Elevation Certificate precisely compares the lowest floor of a building to the Base Flood Elevation calculated by FEMA. This document is critical for securing flood insurance and building permits.',
    benefits: ['Can significantly lower flood insurance rates', 'Required for new construction in flood zones', 'Validates compliance with local code', 'Aids in flood mitigation planning'],
    process: ['Review of current FEMA FIRM maps', 'High-precision elevation field measurement', 'Documentation of building mechanics and vents', 'Preparation of the official FEMA form']
  },
  {
    id: 'final',
    title: 'Final Survey',
    tag: 'Construction',
    img: '/services/final.jpg',
    body: ['The conclusive survey conducted at project completion to secure a Certificate of Occupancy.'],
    bullets: ['Building setback verification', 'Driveway alignment', 'Final grade validation'],
    detailedDescription: 'A Final Survey demonstrates that a newly constructed home or building complies with the approved site plans, local zoning ordinances, and setback requirements. This is usually the final step required by the municipality before closing or move-in.',
    benefits: ['Satisfies municipal CO requirements', 'Reassures lenders and buyers', 'Proves compliance with setbacks', 'Completes the project documentation'],
    process: ['Final visit to the finished site', 'Measurement of building footprints and concrete', 'Comparison to approved site plan', 'Issuance of signed final survey']
  },
  {
    id: 'flood',
    title: 'Flood Zone Determination',
    tag: 'FEMA',
    img: '/services/flood.jpg',
    body: ['Expert analysis determining a property\'s exact risk level regarding established flood plains.'],
    bullets: ['LOMA applications', 'Risk analysis', 'Lender requirement fulfillment'],
    detailedDescription: 'We determine exactly where your property lies in relation to FEMA established flood zones. If we find that a structure is actually on natural high ground, we can assist in filing a Letter of Map Amendment (LOMA) to have the flood insurance requirement officially removed.',
    benefits: ['Provides clarity on actual flood risk', 'Can eliminate mandatory flood insurance', 'Increases property resale value', 'Helps in sensible land development'],
    process: ['Reviewing local and national flood data', 'Surveying ground elevations on site', 'Comparing data to base flood elevations', 'Filing applications with FEMA if applicable']
  },
  {
    id: 'hydro',
    title: 'Hydrographic Survey',
    tag: 'Marine',
    img: '/services/hydro.jpg',
    body: ['Detailed mapping of underwater topography and features for marine construction and dredging.'],
    bullets: ['Depth sounding', 'Dredge volume calculation', 'Seawall and dock planning'],
    detailedDescription: 'Using sonar and advanced GPS, hydrographic surveys map the contours of riverbeds, lakes, and oceans. This data is critical for safe navigation, harbor dredging, bridge construction, and environmental monitoring of aquatic ecosystems.',
    benefits: ['Ensures safe marine navigation', 'Accurately calculates dredging volumes', 'Essential for bridge and dock engineering', 'Monitors environmental sediment shifts'],
    process: ['Vessel mobilization with sonar arrays', 'Grid-pattern data collection over water', 'Tidal and sound-velocity corrections', 'Generation of bathymetric contour maps']
  },
  {
    id: 'meanhigh',
    title: 'Mean High Water Survey',
    tag: 'Marine',
    img: '/services/meanhigh.jpg',
    body: ['Establishing the legal boundary between sovereign state waters and private upland property.'],
    bullets: ['Riparian rights', 'Coastal development', 'State compliance'],
    detailedDescription: 'A Mean High Water Line (MHWL) survey determines the boundary where private waterfront property ends and sovereign state-owned water begins. This highly specialized survey is legally required before beginning any coastal construction like docks or seawalls.',
    benefits: ['Defines legal waterfront ownership limits', 'Required for state DEP permitting', 'Protects riparian rights', 'Mitigates disputes over coastal lines'],
    process: ['Analysis of local tidal datum stations', 'Field determination of physical water marks', 'Precise elevation surveying along the shore', 'State-compliant plat preparation']
  },
  {
    id: 'quantity',
    title: 'Quantity Survey',
    tag: 'Construction',
    img: '/services/quantity.jpg',
    body: ['Accurately measuring the volume of earthworks or materials for cost management and billing.'],
    bullets: ['Cut and fill calculations', 'Stockpile measurement', 'Contractor payment validation'],
    detailedDescription: 'Quantity surveys measure the exact volume of dirt moved, rock excavated, or materials stockpiled. By comparing pre-construction and post-construction 3D surfaces, we provide undeniable data for contractor payouts and project budgeting.',
    benefits: ['Prevents overbilling by contractors', 'Provides accurate project budget tracking', 'Optimizes site cut/fill balance', 'Fast turnaround utilizing drone technology'],
    process: ['Baseline topographic mapping', 'Periodic resurveying of the site', '3D surface comparison modeling', 'Detailed volumetric report generation']
  },
  {
    id: 'specific',
    title: 'Specific Purpose Survey',
    tag: 'All Projects',
    img: '/services/specific.jpg',
    body: ['Custom-tailored surveying solutions designed to address unique, non-standard project requirements.'],
    bullets: ['Easement creation', 'Accident scene mapping', 'Line-of-sight analysis'],
    detailedDescription: 'Not all inquiries fit a standard mold. A Specific Purpose Survey is highly customizable, focusing only on the specific data required by the client—whether that implies mapping a singular easement, performing line-of-sight studies, or locating very specific site assets.',
    benefits: ['Cost-effective by focusing only on what is needed', 'Highly adaptable to unique legal or engineering needs', 'Provides official documentation for niche uses', 'Reduces turnaround time'],
    process: ['Consultation to define exact scope', 'Targeted field data collection', 'Processing of relevant spatial data', 'Delivery of a focused, custom map']
  },
  {
    id: 'topo',
    title: 'Topographic Survey',
    tag: 'Site Planning',
    img: '/services/topo.jpg',
    body: ['Mapping the exact three-dimensional contours and physical features of a piece of land.'],
    bullets: ['Contour mapping', 'Tree and utility location', 'Drainage planning base map'],
    detailedDescription: 'Before engineers can design roads or architects can place buildings, they need to know the shape of the land. Topographic surveys locate all natural and man-made features and elevations, providing the critical base map for all site development planning.',
    benefits: ['Vital for proper drainage and sewer design', 'Identifies physical constraints early', 'Required for commercial site plan approval', 'Allows architects to design with the terrain'],
    process: ['Research of utility records', 'Intensive grid-pattern field measurement', 'Location of trees, roads, and utilities', 'Creation of 3D CAD deliverable']
  },
  {
    id: 'subdivision',
    title: 'Subdivision Planning and Platting',
    tag: 'Commercial',
    img: '/services/subdivision.jpg',
    body: ['The complex process of dividing large tracts of land into smaller, legally sellable parcels or lots.'],
    bullets: ['Lot geometry', 'Right-of-way dedication', 'Zoning compliance layout'],
    detailedDescription: 'Subdivision platting turns raw land into a community. We work closely with developers and local zoning boards to design lot layouts, dedicate road right-of-ways, and legally record the new parcels, ensuring maximizing land value while meeting all municipal demands.',
    benefits: ['Maximizes the profitable use of the land', 'Creates legally distinct, sellable properties', 'Coordinates complex road and utility corridors', 'Ensures compliance with all zoning bylaws'],
    process: ['Boundary survey of master tract', 'Conceptual lot and road layout design', 'Municipal meetings and plan revisions', 'Setting permanent monuments and recording the plat']
  }
];

export const tagColors: Record<string, { bg: string; border: string; text: string }> = {
  Commercial: { bg: 'rgba(0,79,128,0.70)', border: 'rgba(0,170,238)', text: '#fff' },
  Residential: { bg: 'rgba(16,185,129,0.70)', border: 'rgba(16,185,129)', text: '#000' },
  Construction: { bg: 'rgba(59,130,246,0.70)', border: 'rgba(59,130,246)', text: '#fff' },
  'All Projects': { bg: 'rgba(0,79,128,0.70)', border: 'rgba(0,170,238)', text: '#fff' },
  FEMA: { bg: 'rgba(217,119,6,0.70)', border: 'rgba(217,119,6)', text: '#fff' },
  'Site Planning': { bg: 'rgba(20,184,166,0.70)', border: 'rgba(20,184,166)', text: '#fff' },
  Aerial: { bg: 'rgba(139,92,246,0.70)', border: 'rgba(139,92,246)', text: '#fff' },
  Marine: { bg: 'rgba(14,165,233,0.70)', border: 'rgba(14,165,233)', text: '#fff' }
};
