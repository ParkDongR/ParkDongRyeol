/* =========================================================
   사이트의 글과 예시 데이터는 이 파일에서 수정하세요.
   사진은 assets/ 폴더에서 같은 파일명으로 교체할 수 있습니다.
   아래 내용은 실제 회사 실적·인증·채용 정보가 아닌 목업입니다.
   ========================================================= */
window.SITE = {
  name: 'KESS',
  tagline: '에너지의 내일을 더 안전하게',
  email: 'contact@example.com',
  address: '서울특별시 ○○구 ○○로 00 (주소 예시)',
  hours: '평일 09:00–18:00 · 주말 및 공휴일 휴무',
  hero: [
    { image:'solar-hero.jpg', kicker:'ENGINEERING SAFETY, EVERY DAY', title:'박동렬이 직접 개발하고 진단하며,', accent:'내일의 안전을 설계합니다.', body:'전력설비 진단부터 안전관리, 신재생에너지까지.\n보이지 않는 위험을 읽고, 흔들림 없는 일상을 만듭니다.', label:'01 — SOLAR ENERGY' },
    { image:'power-grid.jpg', kicker:'RELIABILITY STARTS WITH INSIGHT', title:'작은 신호를 놓치지 않는 기술,', accent:'멈추지 않는 현장을 위해.', body:'설비의 현재를 정확하게 이해하는 것.\n안전한 에너지 운영은 꼼꼼한 진단에서 시작됩니다.', label:'02 — POWER INFRASTRUCTURE' },
    { image:'wind-energy.jpg', kicker:'A BETTER ENERGY FUTURE', title:'지속 가능한 에너지에,', accent:'지속 가능한 안전을.', body:'새로운 에너지의 가능성을 더 오래, 더 안정적으로.\n친환경 설비의 건강한 운영을 함께 고민합니다.', label:'03 — WIND ENERGY' }
  ],
  groups: [
    {id:'diagnosis',number:'01',name:'전력설비 진단',en:'POWER DIAGNOSTICS',image:'power-grid.jpg',desc:'설비의 작은 변화에서 위험의 신호를 읽습니다. 정확한 진단으로 안정적인 전력 운영을 지원합니다.'},
    {id:'prevention',number:'02',name:'전기재해 예방',en:'RISK PREVENTION',image:'solar-detail.jpg',desc:'문제가 발생하기 전에, 한발 먼저. 현장의 위험 요인을 분석하고 예방의 기준을 세웁니다.'},
    {id:'management',number:'03',name:'안전관리·공사',en:'SAFETY & ENGINEERING',image:'wind-energy.jpg',desc:'점검에서 유지관리, 설비 구축까지. 에너지 인프라의 전 과정에 안전을 연결합니다.'}
  ],
  services: [
    {id:'blackout',group:'diagnosis',name:'정전진단',en:'OFFLINE DIAGNOSTICS',desc:'정전 상태에서 전력설비의 성능과 절연 상태를 살펴 잠재적인 이상을 확인합니다.',targets:['계전기','차단기','변압기','캐패시터','CT 및 VT','피뢰기','전동기','케이블']},
    {id:'live',group:'diagnosis',name:'활선진단',en:'ONLINE DIAGNOSTICS',desc:'운영 중인 전력설비의 신호를 관찰하고 유지보수 계획에 필요한 정보를 제공합니다.',targets:['열화상 진단','부분방전 진단','전력 품질 측정']},
    {id:'renewable',group:'diagnosis',name:'신재생에너지 진단',en:'RENEWABLE ENERGY',desc:'태양광과 풍력 설비의 상태를 점검해 안정적이고 지속 가능한 운영을 돕습니다.',targets:['태양광 발전설비','풍력 발전설비','연계 전력설비']},
    {id:'commissioning',group:'diagnosis',name:'준공진단',en:'COMMISSIONING',desc:'새로운 전력설비가 계획한 성능을 발휘할 수 있도록 설치·준공 단계의 상태를 확인합니다.',targets:['공장 인수시험','현장 인수시험','시운전 점검']},
    {id:'maintenance',group:'diagnosis',name:'예방보전',en:'PREVENTIVE MAINTENANCE',desc:'정기적인 성능 확인과 유지보수 계획으로 예기치 못한 설비 중단에 대비합니다.',targets:['성능시험','유지보수 계획','설비 이력 관리']},
    {id:'system',group:'prevention',name:'전력계통분석',en:'POWER SYSTEM ANALYSIS',desc:'전력계통의 구성과 운영 조건을 분석해 신뢰도 높은 운영 방향을 제안합니다.',targets:['계통 검토','보호협조 검토','전력 품질']},
    {id:'fire',group:'prevention',name:'감전·전기화재 예방진단',en:'ELECTRICAL FIRE PREVENTION',desc:'현장의 전기적 위험 요인을 살펴 감전과 화재 예방에 필요한 개선 방향을 정리합니다.',targets:['감전 위험','전기화재 위험','설비 개선사항']},
    {id:'special',group:'prevention',name:'특수진단',en:'SPECIALIZED DIAGNOSTICS',desc:'현장 특성과 설비 조건에 맞는 진단 항목을 구성하고 위험 요인을 세밀하게 검토합니다.',targets:['정전기 위험 검토','전자파 환경','설비 노후도']},
    {id:'investigation',group:'prevention',name:'사고조사',en:'INCIDENT INVESTIGATION',desc:'사고 현장의 자료와 설비 상태를 검토해 원인을 이해하고 재발 방지 방향을 찾습니다.',targets:['현장 자료 검토','원인 분석','재발 방지 검토']},
    {id:'safety',group:'management',name:'전기안전관리',en:'ELECTRICAL SAFETY MANAGEMENT',desc:'일상적인 점검과 현장에 맞는 관리 체계로 안정적인 전기설비 운영을 돕습니다.',targets:['일상 점검','위탁 관리','안전 순회']},
    {id:'inspection',group:'management',name:'전기설비 안전점검',en:'SAFETY INSPECTION',desc:'설비별 점검 항목을 체계적으로 확인하고 관리에 필요한 상태 정보를 정리합니다.',targets:['정기 점검','설비 순회','점검 결과 정리']},
    {id:'construction',group:'management',name:'전기공사업',en:'ELECTRICAL CONSTRUCTION',desc:'전력설비의 설치와 개선을 현장 조건에 맞게 계획하고 안전한 시공 방향을 제시합니다.',targets:['전력설비 공사','배전설비 공사','설비 개선']},
    {id:'fire-system',group:'management',name:'소방시설공사',en:'FIRE PROTECTION ENGINEERING',desc:'화재 예방과 대응을 위한 설비의 구축·개선 범위를 현장에 맞게 검토합니다.',targets:['소방 전기설비','시설 개선','시공 점검']}
  ],
  cases: [
    {id:'factory',tag:'전력설비 · 예시 프로젝트',title:'현장의 멈춤을 줄이는\n선제적 설비 진단',image:'power-grid.jpg',desc:'생산시설의 전력설비를 점검하고, 설비별 관리 우선순위를 정리하는 프로젝트 구성 예시입니다.',service:'blackout'},
    {id:'solar',tag:'신재생에너지 · 예시 프로젝트',title:'태양광 발전의\n안정적인 내일을 위해',image:'solar-detail.jpg',desc:'태양광 발전설비의 점검 항목과 주기적인 관리 흐름을 소개하는 예시입니다.',service:'renewable'},
    {id:'wind',tag:'친환경 인프라 · 예시 프로젝트',title:'바람의 가능성을\n안전한 에너지로',image:'wind-energy.jpg',desc:'친환경 에너지 인프라에 필요한 점검과 유지관리 과정을 구성한 예시입니다.',service:'renewable'}
  ],
  posts: [
    {id:'notice-1',category:'공지사항',date:'2026.10.15',title:'더 편리해진 KESS 웹사이트를 소개합니다',summary:'사업분야를 쉽게 찾고, 필요한 기술 자료를 빠르게 확인하세요.',body:['새로운 홈페이지 구성을 소개하기 위한 예시 게시글입니다. 회사에서 실제로 발표한 공지가 아닙니다.','사업분야 페이지에서는 13개 서비스의 개요와 진단 대상을 확인할 수 있습니다. 고객지원에서는 공지와 자료를 검색할 수 있습니다.','이 제목과 본문은 data.js의 posts 항목에서 직접 바꿀 수 있습니다.'],pinned:true},
    {id:'guide-1',category:'기술자료',date:'2026.10.08',title:'전력설비 정기점검, 무엇부터 준비해야 할까요?',summary:'현장 점검을 계획할 때 확인할 기본 항목을 정리했습니다.',body:['점검 준비 흐름을 보여주기 위한 목업 자료입니다. 실제 현장 점검 기준을 대체하지 않습니다.','설비 목록, 도면, 이전 점검 이력과 현장 운영 조건을 먼저 정리합니다. 이후 점검 범위와 필요한 일정을 담당자와 협의합니다.','실제 회사 자료가 준비되면 첨부파일과 내용을 교체해 주세요.'],download:true},
    {id:'esg-1',category:'ESG 소식',date:'2026.09.25',title:'에너지의 미래를 생각하는 작은 실천',summary:'환경과 사람, 투명한 운영을 연결하는 ESG 콘텐츠 예시입니다.',body:['이 글은 ESG 페이지의 구성 예시입니다. 실제 회사의 활동이나 성과를 주장하지 않습니다.','실제 활동이 준비되면 목표, 수행 내용, 확인 가능한 결과와 사진을 함께 소개할 수 있습니다.']},
    {id:'guide-2',category:'기술자료',date:'2026.09.17',title:'신재생에너지 설비 관리 체크리스트',summary:'태양광·풍력 설비 관리 자료를 소개하는 샘플입니다.',body:['자료실 다운로드 기능을 확인할 수 있는 샘플 콘텐츠입니다.','설비 종류, 점검 일자, 확인 항목과 후속 조치를 기록하는 형식으로 회사 자료를 구성할 수 있습니다.'],download:true},
    {id:'notice-2',category:'공지사항',date:'2026.09.10',title:'기술 상담 접수 방법 안내',summary:'필요한 서비스를 찾기 어려우시면 문의 내용을 정리해 보세요.',body:['이 사이트의 문의 양식은 목업입니다. 작성 내용을 텍스트 파일로 저장할 수 있으며 회사로 발송되지는 않습니다.','실제 운영 시에는 담당자 수신 경로와 개인정보 안내를 연결해 주세요.']},
    {id:'guide-3',category:'기술자료',date:'2026.08.28',title:'정전진단과 활선진단의 차이 알아보기',summary:'설비의 운영 조건에 따라 달라지는 진단 방식의 개요입니다.',body:['서비스 설명의 형식을 보여주는 예시입니다. 구체적인 진단 범위는 현장 조건에 따라 달라집니다.','정전진단은 정전 상태의 설비를, 활선진단은 운영 중인 설비의 신호를 확인하는 방식으로 소개할 수 있습니다.']},
    {id:'esg-2',category:'ESG 소식',date:'2026.08.20',title:'함께 지키는 안전 문화',summary:'안전 교육과 협력의 가치를 담은 소식 예시입니다.',body:['기업의 안전 문화 활동을 소개하는 예시 게시글입니다.','실제 교육·활동 자료가 확보되면 내용을 교체해 주세요.']}
  ],
  branches:[{name:'본사',en:'HEAD OFFICE',address:'서울특별시 ○○구 ○○로 00',detail:'회사 주소를 입력해 주세요.'},{name:'호남지사',en:'HONAM OFFICE',address:'전라남도 ○○시 ○○로 00',detail:'지사 주소를 입력해 주세요.'},{name:'영남지사',en:'YEONGNAM OFFICE',address:'울산광역시 ○○구 ○○로 00',detail:'지사 주소를 입력해 주세요.'}]
};
