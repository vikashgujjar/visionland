export interface ProcessStep {
  title: string;
  description: string;
}

export interface SurveyService {
  id: string;
  title: string;
  tag: string;
  img: string;
  body: string[];
  bullets: string[];
  detailedDescription?: string;
  benefits?: string[];
  process?: ProcessStep[];
}

export const services: SurveyService[] = [
  {
    id: 'boundary',
    title: 'Boundary Surveys',
    tag: 'Residential',
    img: '/services/boundary.webp',
    body: ['Formal identification and establishment of property boundary corners to protect your real estate investment.'],
    bullets: ['Dispute resolution', 'Fencing layout', 'Deed line verification'],
    detailedDescription: 'A boundary survey precisely locates the legal limits of a property based on historical records, deeds, and physical monuments. It is the definitive way to know what you own, preventing costly disputes with neighbors over fences, driveways, or additions.',
    benefits: ['Provides legal protection of property lines', 'Prevents costly encroachment disputes', 'Required for many building permits', 'Gives peace of mind before building'],
    process: [
      { title: 'Extensive deed and historical research', description: 'We analyze property records, historical deeds, and maps to establish the legal foundation of your property lines.' },
      { title: 'Field search for existing monuments', description: 'Our team uses high-precision equipment to locate physical markers like iron pins or stones mentioned in legal descriptions.' },
      { title: 'Measurement and replacement of missing corners', description: 'We accurately recalculate and set new markers for any property corners that have been lost or removed over time.' },
      { title: 'Creation of signed baseline plat', description: 'A final certified map is produced, legally documenting your exact boundaries for use in permits or disputes.' }
    ]
  },
  {
    id: 'drone',
    title: 'Drone Surveys',
    tag: 'Aerial',
    img: '/services/drone.webp',
    body: ['Drone Surveys offer high-precision aerial mapping and data collection, significantly reducing time spent in the field.'],
    bullets: ['High-resolution 3D mapping', 'Rapid data collection', 'Safer for hazardous sites'],
    detailedDescription: 'Aerial drone surveying uses sophisticated UAVs equipped with advanced cameras and sensors (including LiDAR) to capture highly accurate topographic and visual data. This modern approach is faster, safer, and often more cost-effective for large-scale or inaccessible projects.',
    benefits: ['Faster turnaround times', 'Extremely detailed 3D models', 'Reduces on-site safety risks', 'Cost-effective for large areas'],
    process: [
      { title: 'Flight planning and airspace check', description: 'We coordinate with aviation authorities and map out precise flight paths to ensure safe, legal, and thorough coverage.' },
      { title: 'Ground control point setup', description: 'Highly accurate GPS markers are placed on the ground to calibrate the drone data for sub-centimeter precision.' },
      { title: 'Autonomous drone flight and data capture', description: 'Advanced UAVs capture thousands of high-resolution images and LiDAR points covering every inch of the project site.' },
      { title: 'Photogrammetry processing and delivery', description: 'Our specialists process the raw data into detailed 3D models, orthomosaics, and topographic maps for your use.' }
    ]
  },
  {
    id: 'alta',
    title: 'ALTA Surveys',
    tag: 'Commercial',
    img: '/services/alta.webp',
    body: ['Comprehensive survey meeting ALTA/NSPS standards, essential for commercial real estate transactions.'],
    bullets: ['Title commitment review', 'Boundary and easement verification', 'Zoning compliance checks'],
    detailedDescription: 'The ALTA/NSPS Land Title Survey is the highest standard of boundary survey. Primarily used for commercial properties, it provides lenders, title companies, and buyers with an exhaustive picture of the property lines, easements, encumbrances, and improvements.',
    benefits: ['Satisfies commercial lender requirements', 'Identifies hidden easements and encroachments', 'Ensures clear title transfer', 'Highlights potential zoning issues'],
    process: [
      { title: 'In-depth title research', description: 'We review the title commitment and all underlying documents to identify easements, encumbrances, and legal restrictions.' },
      { title: 'Detailed field measurement', description: 'Every physical improvement and boundary monument is measured according to strict ALTA/NSPS national standards.' },
      { title: 'Mapping of all site improvements', description: 'Buildings, fences, utilities, and parking areas are meticulously mapped to show their exact relationship to property lines.' },
      { title: 'Final coordination with title company', description: 'We work directly with your title agent and lender to ensure all required Table A items are addressed and certified.' }
    ]
  },
  {
    id: 'asbuilt',
    title: 'As-Built Surveys',
    tag: 'Construction',
    img: '/services/asbuilt.webp',
    body: ['Post-construction verification mapping to confirm structures and improvements match the original design.'],
    bullets: ['Utility placement verification', 'Foundation checks', 'Compliance with approved plans'],
    detailedDescription: 'As-Built surveys provide a detailed record of a project as it was actually constructed in the field. These are crucial for final inspections, obtaining certificates of occupancy, and ensuring underground utilities are properly mapped for future maintenance.',
    benefits: ['Provides absolute proof of compliance', 'Essential for final municipal approvals', 'Accurate baseline for future renovations', 'Identifies errors before project closeout'],
    process: [
      { title: 'Field measurement of final structures', description: 'We visit the completed site to record the exact dimensions and locations of all newly constructed buildings and features.' },
      { title: 'Data comparison against design plans', description: 'Our engineers compare the field data against the original blueprints to identify any deviations or potential issues.' },
      { title: 'Highlighting of any deviations', description: 'Any differences between the design and actual construction are clearly documented for municipal approval or project adjustments.' },
      { title: 'Final CAD deliverable creation', description: 'A comprehensive set of digital files and certified maps are produced, confirming project completion as designed.' }
    ]
  },
  {
    id: 'condominium',
    title: 'Condominium Survey',
    tag: 'Residential',
    img: '/services/condominium.webp',
    body: ['Detailed mapping specifically designed for the creation and management of condominium associations.'],
    bullets: ['Unit boundary definition', 'Common area mapping', 'Association document compliance'],
    detailedDescription: 'Creating a condominium requires specialized surveying to define three-dimensional property limits, distinguishing individual units from common elements. We provide exact interior and exterior measurements to comply with local condominium statutes.',
    benefits: ['Legally separates individual units', 'Defines shared mechanical and common areas', 'Complies strictly with local condo laws', 'Facilitates unit sales and financing'],
    process: [
      { title: 'Review of architectural plans', description: 'We carefully analyze the proposed building layouts and floor plans to determine the legal unit boundaries.' },
      { title: 'Field measurement of built units', description: 'Every individual unit and common area is measured on-site to ensure the legal documents match the physical reality.' },
      { title: 'Drafting of floor plans and elevations', description: 'Detailed 3D representations and unit maps are created to define the precise vertical and horizontal limits of ownership.' },
      { title: 'Final surveyor certification', description: 'The condominium plat is certified and recorded, enabling the legal sale and management of individual units.' }
    ]
  },
  {
    id: 'construction',
    title: 'Construction Layout',
    tag: 'Construction',
    img: '/services/construction.webp',
    body: ['Accurate physical staking and layout of construction plans on the actual job site.'],
    bullets: ['Foundation staking', 'Utility routing', 'Roadway alignment'],
    detailedDescription: 'Construction layout translates paper blueprints into physical ground stakes, guiding contractors exactly where to build. From skyscrapers to residential communities, precision layout prevents catastrophic errors during excavation and concrete pours.',
    benefits: ['Eliminates costly construction rework', 'Keeps projects strictly to timeline', 'Coordinates tightly with machine operators', 'Ensures correct drainage gradients'],
    process: [
      { title: 'Import and coordinate checking of CAD design', description: 'We verify the engineering designs and translate them into a precise coordinate system for site staking.' },
      { title: 'Setting control points on site', description: 'Stable reference points are established around the site to maintain accuracy throughout the entire construction process.' },
      { title: 'Physical staking of structures and utilities', description: 'Our crews place stakes and markers exactly where foundations, walls, and pipes need to be installed.' },
      { title: 'Quality control check on all placed stakes', description: 'Every marker is double-checked to ensure the construction team can build with total confidence.' }
    ]
  },
  {
    id: 'control',
    title: 'Control Survey',
    tag: 'Commercial',
    img: '/services/control.webp',
    body: ['Establishing a highly accurate network of physical points for subsequent detailed surveying.'],
    bullets: ['GPS networks', 'Baseline establishment', 'Large-scale mapping foundation'],
    detailedDescription: 'A control survey provides the precise framework upon which all other surveys, construction designs, or GIS mappings cover. Utilizing advanced static GPS and highly accurate optical levels, we establish reliable baseline coordinates and elevations.',
    benefits: ['Prevents compound errors over large sites', 'Links project data to state plane coordinates', 'Essential for multi-phase developments', 'Provides long-term reference points'],
    process: [
      { title: 'Reconnaissance and network planning', description: 'We identify the best locations for control monuments to ensure maximum stability and visibility across the project site.' },
      { title: 'Static GPS and optical observations', description: 'Using specialized long-duration GPS sessions and high-precision levels, we establish rock-solid reference data.' },
      { title: 'Rigorous data adjustment and calculation', description: 'Advanced mathematical processing ensures all measurements are perfectly synchronized with national coordinate systems.' },
      { title: 'Monumentation and report delivery', description: 'Permanent markers are installed on-site, accompanied by a detailed report of the precise coordinates and elevations.' }
    ]
  },
  {
    id: 'elevation',
    title: 'Elevation Certificates',
    tag: 'FEMA',
    img: '/services/elevation.webp',
    body: ['Official documentation of a structure’s elevation relative to FEMA flood risk data.'],
    bullets: ['Flood zone verification', 'Insurance premium reduction', 'Compliance with local ordinances'],
    detailedDescription: 'Required for properties located in high-risk flood zones, an Elevation Certificate precisely compares the lowest floor of a building to the Base Flood Elevation calculated by FEMA. This document is critical for securing flood insurance and building permits.',
    benefits: ['Can significantly lower flood insurance rates', 'Required for new construction in flood zones', 'Validates compliance with local code', 'Aids in flood mitigation planning'],
    process: [
      { title: 'Review of current FEMA FIRM maps', description: 'We analyze the latest Flood Insurance Rate Maps to determine your property\'s designated flood risk zone.' },
      { title: 'High-precision elevation field measurement', description: 'Our team measures the lowest floor and adjacent grades with precision instruments to compare against flood levels.' },
      { title: 'Documentation of building mechanics and vents', description: 'We record essential building details like machine heights and flood openings required for the official FEMA form.' },
      { title: 'Preparation of the official FEMA form', description: 'A certified Elevation Certificate is completed and provided for your insurance agent or building department.' }
    ]
  },
  {
    id: 'final',
    title: 'Final Survey',
    tag: 'Construction',
    img: '/services/final.webp',
    body: ['The conclusive survey conducted at project completion to secure a Certificate of Occupancy.'],
    bullets: ['Building setback verification', 'Driveway alignment', 'Final grade validation'],
    detailedDescription: 'A Final Survey demonstrates that a newly constructed home or building complies with the approved site plans, local zoning ordinances, and setback requirements. This is usually the final step required by the municipality before closing or move-in.',
    benefits: ['Satisfies municipal CO requirements', 'Reassures lenders and buyers', 'Proves compliance with setbacks', 'Completes the project documentation'],
    process: [
      { title: 'Final visit to the finished site', description: 'We conduct a conclusive on-site inspection once all construction and landscaping are complete.' },
      { title: 'Measurement of building footprints and concrete', description: 'All final structures, driveways, and walls are measured to verify they match the approved development plan.' },
      { title: 'Comparison to approved site plan', description: 'We ensure all setbacks and municipal requirements have been met during the construction process.' },
      { title: 'Issuance of signed final survey', description: 'A final certified survey is delivered to secure your Certificate of Occupancy and close out the project.' }
    ]
  },
  {
    id: 'flood',
    title: 'Flood Zone Determination',
    tag: 'FEMA',
    img: '/services/flood.webp',
    body: ['Expert analysis determining a property\'s exact risk level regarding established flood plains.'],
    bullets: ['LOMA applications', 'Risk analysis', 'Lender requirement fulfillment'],
    detailedDescription: 'We determine exactly where your property lies in relation to FEMA established flood zones. If we find that a structure is actually on natural high ground, we can assist in filing a Letter of Map Amendment (LOMA) to have the flood insurance requirement officially removed.',
    benefits: ['Provides clarity on actual flood risk', 'Can eliminate mandatory flood insurance', 'Increases property resale value', 'Helps in sensible land development'],
    process: [
      { title: 'Reviewing local and national flood data', description: 'We cross-reference historical flood records with current FEMA maps and local drainage studies.' },
      { title: 'Surveying ground elevations on site', description: 'Extensive on-site measurements are taken to map the natural highs and lows of the property terrain.' },
      { title: 'Comparing data to base flood elevations', description: 'We determine exactly how much of your property sits above or below the calculated flood risk levels.' },
      { title: 'Filing applications with FEMA if applicable', description: 'If your structure is on high ground, we assist in applying for a LOMA to remove the flood insurance requirement.' }
    ]
  },
  {
    id: 'hydro',
    title: 'Hydrographic Survey',
    tag: 'Marine',
    img: '/services/hydro.webp',
    body: ['Detailed mapping of underwater topography and features for marine construction and dredging.'],
    bullets: ['Depth sounding', 'Dredge volume calculation', 'Seawall and dock planning'],
    detailedDescription: 'Using sonar and advanced GPS, hydrographic surveys map the contours of riverbeds, lakes, and oceans. This data is critical for safe navigation, harbor dredging, bridge construction, and environmental monitoring of aquatic ecosystems.',
    benefits: ['Ensures safe marine navigation', 'Accurately calculates dredging volumes', 'Essential for bridge and dock engineering', 'Monitors environmental sediment shifts'],
    process: [
      { title: 'Vessel mobilization with sonar arrays', description: 'We deploy specialized survey boats equipped with multi-beam or single-beam sonar for underwater mapping.' },
      { title: 'Grid-pattern data collection over water', description: 'The boat traverses the water body in a precise grid to ensure 100% coverage of the bottom topography.' },
      { title: 'Tidal and sound-velocity corrections', description: 'Raw sonar data is adjusted for water temperature, salinity, and tide levels to ensure absolute vertical accuracy.' },
      { title: 'Generation of bathymetric contour maps', description: 'Detailed underwater maps are produced, showing depths and features for marine engineering or dredging.' }
    ]
  },
  {
    id: 'meanhigh',
    title: 'Mean High Water Survey',
    tag: 'Marine',
    img: '/services/meanhigh.webp',
    body: ['Establishing the legal boundary between sovereign state waters and private upland property.'],
    bullets: ['Riparian rights', 'Coastal development', 'State compliance'],
    detailedDescription: 'A Mean High Water Line (MHWL) survey determines the boundary where private waterfront property ends and sovereign state-owned water begins. This highly specialized survey is legally required before beginning any coastal construction like docks or seawalls.',
    benefits: ['Defines legal waterfront ownership limits', 'Required for state DEP permitting', 'Protects riparian rights', 'Mitigates disputes over coastal lines'],
    process: [
      { title: 'Analysis of local tidal datum stations', description: 'We study long-term tidal records to establish the specific Mean High Water elevation for your coastal location.' },
      { title: 'Field determination of physical water marks', description: 'Our surveyors identify biological and physical evidence of the tidal water line along the shoreline.' },
      { title: 'Precise elevation surveying along the shore', description: 'The boundary is physically staked on-site to show the legal separation between private and sovereign land.' },
      { title: 'State-compliant plat preparation', description: 'A specialized survey map is created that meets all state requirements for waterfront permitting and development.' }
    ]
  },
  {
    id: 'quantity',
    title: 'Quantity Survey',
    tag: 'Construction',
    img: '/services/quantity.webp',
    body: ['Accurately measuring the volume of earthworks or materials for cost management and billing.'],
    bullets: ['Cut and fill calculations', 'Stockpile measurement', 'Contractor payment validation'],
    detailedDescription: 'Quantity surveys measure the exact volume of dirt moved, rock excavated, or materials stockpiled. By comparing pre-construction and post-construction 3D surfaces, we provide undeniable data for contractor payouts and project budgeting.',
    benefits: ['Prevents overbilling by contractors', 'Provides accurate project budget tracking', 'Optimizes site cut/fill balance', 'Fast turnaround utilizing drone technology'],
    process: [
      { title: 'Baseline topographic mapping', description: 'We establish an initial 3D digital model of the site before any material is moved or stockpiled.' },
      { title: 'Periodic resurveying of the site', description: 'Regular drone or ground surveys are conducted to monitor work progress and material volume changes.' },
      { title: '3D surface comparison modeling', description: 'Our software compares the initial state with the current state to calculate precise cut/fill volumes.' },
      { title: 'Detailed volumetric report generation', description: 'Certified reports provide the undeniable data needed for contractor payments and project budgeting.' }
    ]
  },
  {
    id: 'specific',
    title: 'Specific Purpose Survey',
    tag: 'All Projects',
    img: '/services/specific.webp',
    body: ['Custom-tailored surveying solutions designed to address unique, non-standard project requirements.'],
    bullets: ['Easement creation', 'Accident scene mapping', 'Line-of-sight analysis'],
    detailedDescription: 'Not all inquiries fit a standard mold. A Specific Purpose Survey is highly customizable, focusing only on the specific data required by the client—whether that implies mapping a singular easement, performing line-of-sight studies, or locating very specific site assets.',
    benefits: ['Cost-effective by focusing only on what is needed', 'Highly adaptable to unique legal or engineering needs', 'Provides official documentation for niche uses', 'Reduces turnaround time'],
    process: [
      { title: 'Consultation to define exact scope', description: 'We work with you to understand the niche data requirements and legal objectives for your specific goal.' },
      { title: 'Targeted field data collection', description: 'Our field teams focus exclusively on the specific assets or features relevant to your custom survey.' },
      { title: 'Processing of relevant spatial data', description: 'The collected information is analyzed and filtered to highlight the precise answers your project needs.' },
      { title: 'Delivery of a focused, custom map', description: 'You receive a streamlined, professional report or map tailored exactly to your unique request.' }
    ]
  },
  {
    id: 'topo',
    title: 'Topographic Survey',
    tag: 'Site Planning',
    img: '/services/topo.webp',
    body: ['Mapping the exact three-dimensional contours and physical features of a piece of land.'],
    bullets: ['Contour mapping', 'Tree and utility location', 'Drainage planning base map'],
    detailedDescription: 'Before engineers can design roads or architects can place buildings, they need to know the shape of the land. Topographic surveys locate all natural and man-made features and elevations, providing the critical base map for all site development planning.',
    benefits: ['Vital for proper drainage and sewer design', 'Identifies physical constraints early', 'Required for commercial site plan approval', 'Allows architects to design with the terrain'],
    process: [
      { title: 'Research of utility records', description: 'We coordinate with utility companies to identify and map the locations of underground pipes, cables, and conduits.' },
      { title: 'Intensive grid-pattern field measurement', description: 'Our crew maps the elevation changes across the site to create accurate 3D contour lines.' },
      { title: 'Location of trees, roads, and utilities', description: 'All significant natural and man-made features are precisely located to provide a complete site picture.' },
      { title: 'Creation of 3D CAD deliverable', description: 'A final high-resolution digital model is produced, serving as the essential foundation for site engineering.' }
    ]
  },
  {
    id: 'subdivision',
    title: 'Subdivision Planning and Platting',
    tag: 'Commercial',
    img: '/services/subdivision.webp',
    body: ['The complex process of dividing large tracts of land into smaller, legally sellable parcels or lots.'],
    bullets: ['Lot geometry', 'Right-of-way dedication', 'Zoning compliance layout'],
    detailedDescription: 'Subdivision platting turns raw land into a community. We work closely with developers and local zoning boards to design lot layouts, dedicate road right-of-ways, and legally record the new parcels, ensuring maximizing land value while meeting all municipal demands.',
    benefits: ['Maximizes the profitable use of the land', 'Creates legally distinct, sellable properties', 'Coordinates complex road and utility corridors', 'Ensures compliance with all zoning bylaws'],
    process: [
      { title: 'Boundary survey of master tract', description: 'We begin by establishing the exact outer limits of the larger parcel being divided.' },
      { title: 'Conceptual lot and road layout design', description: 'Our team designs lot configurations that maximize land use while complying with all zoning and setback laws.' },
      { title: 'Municipal meetings and plan revisions', description: 'We coordinate with local planning boards to ensure the subdivision plan meets all community standards.' },
      { title: 'Setting permanent monuments and recording the plat', description: 'Once approved, we set physical markers for every new lot and file the legal plat for public record.' }
    ]
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
