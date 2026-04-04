// ─── Config ───────────────────────────────────────────
const GITHUB_USER = 'luomi16';

// ─── Default Colors (Mard 221色) ──────────────────────
const DEFAULT_COLORS = [
  {id:"A1",name:"A1",hex:"#FAF5CD",count:0},{id:"A2",name:"A2",hex:"#FCFED6",count:0},{id:"A3",name:"A3",hex:"#FCFF92",count:0},{id:"A4",name:"A4",hex:"#F7EC5C",count:0},{id:"A5",name:"A5",hex:"#F0D83A",count:0},{id:"A6",name:"A6",hex:"#FDA951",count:0},{id:"A7",name:"A7",hex:"#FA8C4F",count:0},{id:"A8",name:"A8",hex:"#FBDA4D",count:0},{id:"A9",name:"A9",hex:"#F79D5F",count:0},{id:"A10",name:"A10",hex:"#F47E38",count:0},{id:"A11",name:"A11",hex:"#FEDB99",count:0},{id:"A12",name:"A12",hex:"#FDA276",count:0},{id:"A13",name:"A13",hex:"#FEC667",count:0},{id:"A14",name:"A14",hex:"#F75842",count:0},{id:"A15",name:"A15",hex:"#FBF65E",count:0},{id:"A16",name:"A16",hex:"#FEFF97",count:0},{id:"A17",name:"A17",hex:"#FDE173",count:0},{id:"A18",name:"A18",hex:"#FCBF80",count:0},{id:"A19",name:"A19",hex:"#FD7E77",count:0},{id:"A20",name:"A20",hex:"#F9D66E",count:0},{id:"A21",name:"A21",hex:"#FAE393",count:0},{id:"A22",name:"A22",hex:"#EDF878",count:0},{id:"A23",name:"A23",hex:"#E4C8BA",count:0},{id:"A24",name:"A24",hex:"#F3F6A9",count:0},{id:"A25",name:"A25",hex:"#FFD785",count:0},{id:"A26",name:"A26",hex:"#FFC734",count:0},
  {id:"B1",name:"B1",hex:"#DFF13B",count:0},{id:"B2",name:"B2",hex:"#64F343",count:0},{id:"B3",name:"B3",hex:"#A1F586",count:0},{id:"B4",name:"B4",hex:"#5FDF34",count:0},{id:"B5",name:"B5",hex:"#39E158",count:0},{id:"B6",name:"B6",hex:"#64E0A4",count:0},{id:"B7",name:"B7",hex:"#3EAE7C",count:0},{id:"B8",name:"B8",hex:"#1D9B54",count:0},{id:"B9",name:"B9",hex:"#2A5037",count:0},{id:"B10",name:"B10",hex:"#9AD1BA",count:0},{id:"B11",name:"B11",hex:"#627032",count:0},{id:"B12",name:"B12",hex:"#1A6E3D",count:0},{id:"B13",name:"B13",hex:"#C8E87D",count:0},{id:"B14",name:"B14",hex:"#ABE84F",count:0},{id:"B15",name:"B15",hex:"#305335",count:0},{id:"B16",name:"B16",hex:"#C0ED4F",count:0},{id:"B17",name:"B17",hex:"#9EB33E",count:0},{id:"B18",name:"B18",hex:"#E6ED4F",count:0},{id:"B19",name:"B19",hex:"#26B78E",count:0},{id:"B20",name:"B20",hex:"#CBECCF",count:0},{id:"B21",name:"B21",hex:"#18616A",count:0},{id:"B22",name:"B22",hex:"#0A4241",count:0},{id:"B23",name:"B23",hex:"#343B1A",count:0},{id:"B24",name:"B24",hex:"#E8FAA6",count:0},{id:"B25",name:"B25",hex:"#4E846D",count:0},{id:"B26",name:"B26",hex:"#907C35",count:0},{id:"B27",name:"B27",hex:"#D0E0AF",count:0},{id:"B28",name:"B28",hex:"#9EE5BB",count:0},{id:"B29",name:"B29",hex:"#C6DF5F",count:0},{id:"B30",name:"B30",hex:"#E3FBB1",count:0},{id:"B31",name:"B31",hex:"#B4E691",count:0},{id:"B32",name:"B32",hex:"#92B060",count:0},
  {id:"C1",name:"C1",hex:"#F0FEE4",count:0},{id:"C2",name:"C2",hex:"#ABF8FE",count:0},{id:"C3",name:"C3",hex:"#1AE0F7",count:0},{id:"C4",name:"C4",hex:"#44CDFB",count:0},{id:"C5",name:"C5",hex:"#06AADF",count:0},{id:"C6",name:"C6",hex:"#54A7E9",count:0},{id:"C7",name:"C7",hex:"#3977CA",count:0},{id:"C8",name:"C8",hex:"#0F52BD",count:0},{id:"C9",name:"C9",hex:"#3349C3",count:0},{id:"C10",name:"C10",hex:"#3CBCE3",count:0},{id:"C11",name:"C11",hex:"#2ADED3",count:0},{id:"C12",name:"C12",hex:"#1E334E",count:0},{id:"C13",name:"C13",hex:"#CDE7FE",count:0},{id:"C14",name:"C14",hex:"#D5FCF7",count:0},{id:"C15",name:"C15",hex:"#21C5C4",count:0},{id:"C16",name:"C16",hex:"#1858A2",count:0},{id:"C17",name:"C17",hex:"#02D1F3",count:0},{id:"C18",name:"C18",hex:"#213244",count:0},{id:"C19",name:"C19",hex:"#18869D",count:0},{id:"C20",name:"C20",hex:"#1A70A9",count:0},{id:"C21",name:"C21",hex:"#BCDDFC",count:0},{id:"C22",name:"C22",hex:"#6BB1BB",count:0},{id:"C23",name:"C23",hex:"#C8E2FD",count:0},{id:"C24",name:"C24",hex:"#7EC5F9",count:0},{id:"C25",name:"C25",hex:"#A9E8E0",count:0},{id:"C26",name:"C26",hex:"#42ADCF",count:0},{id:"C27",name:"C27",hex:"#D0DEF9",count:0},{id:"C28",name:"C28",hex:"#BDCEE8",count:0},{id:"C29",name:"C29",hex:"#364A89",count:0},
  {id:"D1",name:"D1",hex:"#ACB7EF",count:0},{id:"D2",name:"D2",hex:"#868DD3",count:0},{id:"D3",name:"D3",hex:"#3554AF",count:0},{id:"D4",name:"D4",hex:"#162D7B",count:0},{id:"D5",name:"D5",hex:"#B34EC6",count:0},{id:"D6",name:"D6",hex:"#B37BDC",count:0},{id:"D7",name:"D7",hex:"#8758A9",count:0},{id:"D8",name:"D8",hex:"#E3D2FE",count:0},{id:"D9",name:"D9",hex:"#D5B9F4",count:0},{id:"D10",name:"D10",hex:"#301A49",count:0},{id:"D11",name:"D11",hex:"#BEB9E2",count:0},{id:"D12",name:"D12",hex:"#DC99CE",count:0},{id:"D13",name:"D13",hex:"#B5038D",count:0},{id:"D14",name:"D14",hex:"#862993",count:0},{id:"D15",name:"D15",hex:"#2F1F8C",count:0},{id:"D16",name:"D16",hex:"#E2E4F0",count:0},{id:"D17",name:"D17",hex:"#C7D3F9",count:0},{id:"D18",name:"D18",hex:"#9A64B8",count:0},{id:"D19",name:"D19",hex:"#D8C2D9",count:0},{id:"D20",name:"D20",hex:"#9A35AD",count:0},{id:"D21",name:"D21",hex:"#940595",count:0},{id:"D22",name:"D22",hex:"#38389A",count:0},{id:"D23",name:"D23",hex:"#EADBF8",count:0},{id:"D24",name:"D24",hex:"#768AE1",count:0},{id:"D25",name:"D25",hex:"#4950C2",count:0},{id:"D26",name:"D26",hex:"#D6C6EB",count:0},
  {id:"E1",name:"E1",hex:"#F6D4CB",count:0},{id:"E2",name:"E2",hex:"#FCC1DD",count:0},{id:"E3",name:"E3",hex:"#F6BDE8",count:0},{id:"E4",name:"E4",hex:"#E8649E",count:0},{id:"E5",name:"E5",hex:"#F0569F",count:0},{id:"E6",name:"E6",hex:"#EB4172",count:0},{id:"E7",name:"E7",hex:"#C53674",count:0},{id:"E8",name:"E8",hex:"#FDDBE9",count:0},{id:"E9",name:"E9",hex:"#E376C7",count:0},{id:"E10",name:"E10",hex:"#D13B95",count:0},{id:"E11",name:"E11",hex:"#F7DAD4",count:0},{id:"E12",name:"E12",hex:"#F693BF",count:0},{id:"E13",name:"E13",hex:"#B5016A",count:0},{id:"E14",name:"E14",hex:"#FAD4BF",count:0},{id:"E15",name:"E15",hex:"#F5C9CA",count:0},{id:"E16",name:"E16",hex:"#FBF4EC",count:0},{id:"E17",name:"E17",hex:"#F7E3EC",count:0},{id:"E18",name:"E18",hex:"#F9C8DB",count:0},{id:"E19",name:"E19",hex:"#F6BBD1",count:0},{id:"E20",name:"E20",hex:"#D7C6CE",count:0},{id:"E21",name:"E21",hex:"#C09DA4",count:0},{id:"E22",name:"E22",hex:"#B38C9F",count:0},{id:"E23",name:"E23",hex:"#937D8A",count:0},{id:"E24",name:"E24",hex:"#DEBEE5",count:0},
  {id:"F1",name:"F1",hex:"#FE9381",count:0},{id:"F2",name:"F2",hex:"#F63D4B",count:0},{id:"F3",name:"F3",hex:"#EE4E3E",count:0},{id:"F4",name:"F4",hex:"#FB2A40",count:0},{id:"F5",name:"F5",hex:"#E10328",count:0},{id:"F6",name:"F6",hex:"#913635",count:0},{id:"F7",name:"F7",hex:"#911932",count:0},{id:"F8",name:"F8",hex:"#BB0126",count:0},{id:"F9",name:"F9",hex:"#E0677A",count:0},{id:"F10",name:"F10",hex:"#874628",count:0},{id:"F11",name:"F11",hex:"#592323",count:0},{id:"F12",name:"F12",hex:"#F3536B",count:0},{id:"F13",name:"F13",hex:"#F45C45",count:0},{id:"F14",name:"F14",hex:"#FCADB2",count:0},{id:"F15",name:"F15",hex:"#D50527",count:0},{id:"F16",name:"F16",hex:"#F8C0A9",count:0},{id:"F17",name:"F17",hex:"#E89B7D",count:0},{id:"F18",name:"F18",hex:"#D07F4A",count:0},{id:"F19",name:"F19",hex:"#BE454A",count:0},{id:"F20",name:"F20",hex:"#C69495",count:0},{id:"F21",name:"F21",hex:"#F2B8C6",count:0},{id:"F22",name:"F22",hex:"#F7C3D0",count:0},{id:"F23",name:"F23",hex:"#ED806C",count:0},{id:"F24",name:"F24",hex:"#E09DAF",count:0},{id:"F25",name:"F25",hex:"#E84854",count:0},
  {id:"G1",name:"G1",hex:"#FFE4D3",count:0},{id:"G2",name:"G2",hex:"#FCC6AC",count:0},{id:"G3",name:"G3",hex:"#F1C4A5",count:0},{id:"G4",name:"G4",hex:"#DCB387",count:0},{id:"G5",name:"G5",hex:"#E7B34E",count:0},{id:"G6",name:"G6",hex:"#E3A014",count:0},{id:"G7",name:"G7",hex:"#985C3A",count:0},{id:"G8",name:"G8",hex:"#713D2F",count:0},{id:"G9",name:"G9",hex:"#E4B685",count:0},{id:"G10",name:"G10",hex:"#DA8C42",count:0},{id:"G11",name:"G11",hex:"#DAC898",count:0},{id:"G12",name:"G12",hex:"#FEC993",count:0},{id:"G13",name:"G13",hex:"#B2714B",count:0},{id:"G14",name:"G14",hex:"#8B684C",count:0},{id:"G15",name:"G15",hex:"#F6F8E3",count:0},{id:"G16",name:"G16",hex:"#F2D8C1",count:0},{id:"G17",name:"G17",hex:"#77544E",count:0},{id:"G18",name:"G18",hex:"#FFE3D5",count:0},{id:"G19",name:"G19",hex:"#DD7D41",count:0},{id:"G20",name:"G20",hex:"#A5452F",count:0},{id:"G21",name:"G21",hex:"#B38561",count:0},
  {id:"H1",name:"H1",hex:"#FFFFFF",count:0},{id:"H2",name:"H2",hex:"#FBFBFB",count:0},{id:"H3",name:"H3",hex:"#B4B4B4",count:0},{id:"H4",name:"H4",hex:"#878787",count:0},{id:"H5",name:"H5",hex:"#464648",count:0},{id:"H6",name:"H6",hex:"#2C2C2C",count:0},{id:"H7",name:"H7",hex:"#010101",count:0},{id:"H8",name:"H8",hex:"#E7D6DC",count:0},{id:"H9",name:"H9",hex:"#EFEDEE",count:0},{id:"H10",name:"H10",hex:"#EBEBEB",count:0},{id:"H11",name:"H11",hex:"#CDCDCD",count:0},{id:"H12",name:"H12",hex:"#FDF6EE",count:0},{id:"H13",name:"H13",hex:"#F4EFD1",count:0},{id:"H14",name:"H14",hex:"#CED7D4",count:0},{id:"H15",name:"H15",hex:"#9AA6A6",count:0},{id:"H16",name:"H16",hex:"#1B1213",count:0},{id:"H17",name:"H17",hex:"#F0EEEF",count:0},{id:"H18",name:"H18",hex:"#FCFFF6",count:0},{id:"H19",name:"H19",hex:"#F2EEE5",count:0},{id:"H20",name:"H20",hex:"#96A09F",count:0},{id:"H21",name:"H21",hex:"#F8FBE6",count:0},{id:"H22",name:"H22",hex:"#CACAD2",count:0},{id:"H23",name:"H23",hex:"#9B9C94",count:0},
  {id:"M1",name:"M1",hex:"#BBC6B6",count:0},{id:"M2",name:"M2",hex:"#909994",count:0},{id:"M3",name:"M3",hex:"#697E80",count:0},{id:"M4",name:"M4",hex:"#E0D4BC",count:0},{id:"M5",name:"M5",hex:"#D1CCAF",count:0},{id:"M6",name:"M6",hex:"#B0AA86",count:0},{id:"M7",name:"M7",hex:"#B0A796",count:0},{id:"M8",name:"M8",hex:"#AE7F82",count:0},{id:"M9",name:"M9",hex:"#A68862",count:0},{id:"M10",name:"M10",hex:"#C4B3BB",count:0},{id:"M11",name:"M11",hex:"#9E7592",count:0},{id:"M12",name:"M12",hex:"#644A51",count:0},{id:"M13",name:"M13",hex:"#C79266",count:0},{id:"M14",name:"M14",hex:"#C27464",count:0},{id:"M15",name:"M15",hex:"#747D7A",count:0},
];

// ─── Refill Presets ───────────────────────────────────
const PRESETS = {
  '72色':  ['A3','A4','A6','A7','A10','A11','A13','B3','B5','B7','B8','B10','B12','B14','B17','B18','B19','B20','C2','C3','C5','C6','C7','C8','C10','C11','C13','C16','D2','D3','D6','D7','D8','D9','D11','D12','D13','D14','D15','D16','D18','D19','D20','D21','E1','E2','E3','E4','E5','E7','E8','E12','E13','F5','F7','F8','F10','F13','G1','G2','G3','G5','G7','G8','G9','G13','H1','H2','H3','H4','H5','H7'],
  '96色':  ['A3','A4','A6','A7','A10','A11','A12','A14','B3','B5','B7','B8','B10','B12','B14','B17','B18','B19','B20','C2','C3','C5','C6','C7','C8','C10','C11','C13','C16','D2','D3','D5','D6','D7','D8','D9','D11','D12','D13','D14','D15','D16','D18','D19','D20','D21','E1','E2','E3','E4','E5','E6','E7','E8','E9','E10','E11','E12','E13','E14','E15','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','F13','F14','G1','G2','G3','G5','G7','G8','G9','G13','G14','G17','H1','H2','H3','H4','H5','H6','H7','M5','M6','M9','M12'],
  '120色': ['A1','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12','A13','A14','A15','B1','B2','B3','B4','B5','B6','B7','B8','B10','B11','B12','B13','B14','B15','B16','B17','B18','B19','B20','C1','C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C13','C14','C15','C16','C17','D1','D2','D3','D5','D6','D7','D8','D9','D11','D12','D13','D14','D15','D16','D17','D18','D19','D20','D21','E1','E2','E3','E4','E5','E6','E7','E8','E9','E10','E11','E12','E13','E14','E15','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','F13','F14','G1','G2','G3','G5','G6','G7','G8','G9','G13','G14','G17','H1','H2','H4','H5','H6','H7','H9','H12','M5','M6','M9','M12'],
  '144色': ['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12','A13','A14','A15','B1','B2','B3','B4','B5','B6','B7','B8','B10','B11','B12','B13','B14','B15','B16','B17','B18','B19','B20','C1','C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C13','C14','C15','C16','C17','D1','D2','D3','D5','D6','D7','D8','D9','D11','D12','D13','D14','D15','D16','D17','D18','D19','D20','D21','E1','E2','E3','E4','E5','E6','E7','E8','E9','E10','E11','E12','E13','E14','E15','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','F13','F14','G1','G2','G3','G4','G5','G6','G7','G8','G9','G10','G11','G12','G13','G14','G15','G16','G17','H1','H2','H3','H4','H5','H6','H7','H8','H9','H10','H11','H12','H13','H14','M1','M2','M3','M4','M5','M6','M7','M8','M9','M10','M11','M12','M13','M14','M15'],
  '221色': null,
};

// ─── State ────────────────────────────────────────────
let state = { colors: [], projects: [], sha: null };
let editingColorId = null;
let editingProjectId = null;
let openProjectId = null;
let filterSeries = 'all';
let filterHasBeads = false;
let dirty = false;

// ─── Settings ─────────────────────────────────────────
function cfg() {
  return {
    repo:  localStorage.getItem('pb_repo')  || 'pinzhu-counter',
    token: localStorage.getItem('pb_token') || '',
  };
}

function openSettings() {
  const s = cfg();
  document.getElementById('settingsRepo').value  = s.repo;
  document.getElementById('settingsToken').value = s.token;
  document.getElementById('settingsError').style.display = 'none';
  showModal('settingsModal');
}

async function saveSettings() {
  const repo  = document.getElementById('settingsRepo').value.trim();
  const token = document.getElementById('settingsToken').value.trim();
  const errEl = document.getElementById('settingsError');
  if (!repo)  { errEl.textContent = '请输入仓库名称'; errEl.style.display='block'; return; }
  if (!token) { errEl.textContent = '请输入 Token'; errEl.style.display='block'; return; }
  localStorage.setItem('pb_repo',  repo);
  localStorage.setItem('pb_token', token);
  closeModal();
  await loadData();
}

// ─── GitHub API ───────────────────────────────────────
async function ghGet() {
  const { repo, token } = cfg();
  const url = `https://api.github.com/repos/${GITHUB_USER}/${repo}/contents/data.json`;
  const headers = { Accept: 'application/vnd.github.v3+json' };
  if (token) headers.Authorization = `token ${token}`;
  const res = await fetch(url, { headers });
  if (res.status === 404) return null;
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.message || `HTTP ${res.status}`);
  }
  return res.json();
}

async function ghPut(data) {
  const { repo, token } = cfg();
  if (!token) throw new Error('需要设置 Token 才能保存');
  const url = `https://api.github.com/repos/${GITHUB_USER}/${repo}/contents/data.json`;
  const content = btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2))));
  const body = { message: `sync ${new Date().toISOString()}`, content };
  if (state.sha) body.sha = state.sha;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.message || `HTTP ${res.status}`);
  }
  const json = await res.json();
  state.sha = json.content.sha;
}

// ─── Load / Save ──────────────────────────────────────
async function loadData() {
  setSyncStatus('syncing', '同步中…');
  try {
    const file = await ghGet();
    if (file) {
      state.sha = file.sha;
      const decoded = decodeURIComponent(escape(atob(file.content.replace(/\s/g, ''))));
      const data = JSON.parse(decoded);
      state.colors   = data.colors   || [];
      state.projects = data.projects || [];
      localStorage.setItem('pb_cache', JSON.stringify({ colors: state.colors, projects: state.projects }));
    } else {
      const cache = localStorage.getItem('pb_cache');
      if (cache) {
        const d = JSON.parse(cache);
        state.colors = d.colors||[];
        state.projects = d.projects||[];
      }
    }
    if (state.colors.length === 0) {
      state.colors = DEFAULT_COLORS.map(c => ({...c}));
      scheduleSave();
    }
    setSyncStatus('ok', '已同步');
  } catch (e) {
    setSyncStatus('error', '加载失败');
    const cache = localStorage.getItem('pb_cache');
    if (cache) {
      const d = JSON.parse(cache);
      state.colors = d.colors||[];
      state.projects = d.projects||[];
      showToast('离线模式（使用缓存）', '');
    } else {
      state.colors = DEFAULT_COLORS.map(c => ({...c}));
      if (!cfg().token) openSettings();
      else showToast('加载失败：' + e.message, 'error');
    }
  }
  render();
}

function scheduleSave() {
  localStorage.setItem('pb_cache', JSON.stringify({ colors: state.colors, projects: state.projects }));
  dirty = true;
  setSyncStatus('pending', '有未同步改动');
}

async function doSave() {
  if (!dirty) return;
  setSyncStatus('syncing', '同步中…');
  const data = { colors: state.colors, projects: state.projects, lastUpdated: new Date().toISOString() };
  try {
    await ghPut(data);
    dirty = false;
    setSyncStatus('ok', '已同步');
    showToast('已同步到 GitHub ✓', 'success');
  } catch (e) {
    setSyncStatus('error', '同步失败');
    showToast('同步失败：' + e.message, 'error');
  }
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && dirty) doSave();
});
window.addEventListener('beforeunload', () => {
  if (dirty) doSave();
});

function setSyncStatus(s, text) {
  document.getElementById('syncDot').className = 'sync-dot' + (s !== 'ok' ? ' ' + s : '');
  document.getElementById('syncText').textContent = text;
}

// ─── Render ───────────────────────────────────────────
function render() {
  renderInventory();
  renderProjects();
}

function renderInventory() {
  const total = state.colors.reduce((n, c) => n + (c.count || 0), 0);
  const seriesList = [...new Set(state.colors.map(c => c.id.match(/^[A-Za-z]+/)?.[0].toUpperCase()).filter(Boolean))].sort();

  let visible = state.colors;
  if (filterSeries !== 'all') visible = visible.filter(c => c.id.toUpperCase().startsWith(filterSeries));
  if (filterHasBeads) visible = visible.filter(c => (c.count || 0) > 0);

  document.getElementById('inventoryStats').innerHTML = `
    <div class="stat-chip"><strong>${state.colors.length}</strong>种颜色</div>
    <div class="stat-chip"><strong>${total.toLocaleString()}</strong>颗总库存</div>
    <div class="stat-chip"><strong>${state.colors.filter(c=>(c.count||0)>0).length}</strong>种有库存</div>
    <button class="btn btn-primary btn-sm" onclick="openQuickRefill()" style="margin-left:auto">🫧 快速补充</button>
  `;

  const seriesBtns = seriesList.map(s =>
    `<button class="btn-filter${filterSeries===s?' active':''}" onclick="setSeriesFilter('${s}')">${s}</button>`
  ).join('');
  document.getElementById('filterBar').innerHTML = `
    <button class="btn-filter${filterSeries==='all'?' active':''}" onclick="setSeriesFilter('all')">全部</button>
    ${seriesBtns}
    <div class="filter-divider"></div>
    <button class="btn-filter${filterHasBeads?' active-has':''}" onclick="toggleHasBeads()">🫧 仅显示有豆</button>
  `;

  let html = visible.map(c => `
    <div class="color-card">
      <div class="card-actions">
        <button class="btn-tiny" onclick="openEditColor('${c.id}')" title="编辑">✏️</button>
        <button class="btn-tiny" onclick="deleteColor('${c.id}')" title="删除">🗑️</button>
      </div>
      <div class="color-swatch-row">
        <div class="color-swatch" style="background:${c.hex}"></div>
        <div class="color-name">${esc(c.name)}</div>
      </div>
      ${(c.count||0) === 0 ? '<span class="stock-badge stock-empty">❌ 缺货</span>' : (c.count||0) < 50 ? '<span class="stock-badge stock-danger">🔴 极少</span>' : (c.count||0) < 200 ? '<span class="stock-badge stock-warn">⚠️ 不足</span>' : ''}
      <div class="color-count" style="color:${c.hex}">${(c.count||0).toLocaleString()}</div>
      <div class="color-count-label">颗</div>
      <div class="color-controls">
        <button class="btn-count minus" onclick="adjustCount('${c.id}',-1)">−</button>
        <input class="count-input" type="number" min="0" value="${c.count||0}"
          style="border-color:${c.hex}55"
          onchange="setCount('${c.id}',this.value)"
          onblur="setCount('${c.id}',this.value)" />
        <button class="btn-count plus" onclick="adjustCount('${c.id}',1)">+</button>
      </div>
    </div>
  `).join('');

  if (!visible.length) {
    html = `<div class="empty-state" style="grid-column:1/-1">
      <div class="empty-icon">🔍</div>
      <p>没有符合条件的颜色</p>
    </div>`;
  }

  html += `<button class="add-color-btn" onclick="openAddColor()">
    <span class="plus-icon">＋</span>添加颜色
  </button>`;

  document.getElementById('colorGrid').innerHTML = html;
}

// ─── Quick Refill ─────────────────────────────────────
function openQuickRefill() {
  document.getElementById('refillAmount').value = '400';
  const grid = document.getElementById('presetGrid');
  grid.innerHTML = Object.entries(PRESETS).map(([name, ids]) => {
    const count = ids ? ids.length : state.colors.length;
    return `<button class="btn-preset" onclick="applyRefill('${name}')">
      <span class="preset-name">${name}</span>
      <span class="preset-count">${count} 个色号</span>
    </button>`;
  }).join('');
  showModal('refillModal');
}

function applyRefill(presetName) {
  const amount = parseInt(document.getElementById('refillAmount').value) || 400;
  if (amount <= 0) { showToast('请输入有效数量', 'error'); return; }
  const ids = PRESETS[presetName];
  const targets = ids ? ids : state.colors.map(c => c.id);
  let applied = 0;
  targets.forEach(id => {
    const c = state.colors.find(x => x.id === id);
    if (c) { c.count = (c.count || 0) + amount; applied++; }
  });
  closeModal();
  render();
  scheduleSave();
  showToast(`已为 ${applied} 个色号各补充 ${amount} 颗`, 'success');
}

function setSeriesFilter(s) {
  filterSeries = s;
  renderInventory();
}

function toggleHasBeads() {
  filterHasBeads = !filterHasBeads;
  renderInventory();
}

function renderProjects() {
  const list = document.getElementById('projectList');
  if (!state.projects.length) {
    list.innerHTML = `<div class="empty-state">
      <div class="empty-icon">🎨</div>
      <p>还没有项目，点击右上角"新建项目"开始</p>
    </div>`;
    return;
  }

  list.innerHTML = state.projects.map(proj => {
    const total = (proj.usage||[]).reduce((n,u) => n+(u.count||0), 0);
    const isOpen = openProjectId === proj.id;
    const usageRows = (proj.usage||[]).map(u => {
      const color = state.colors.find(c => c.id === u.colorId);
      if (!color) return '';
      return `<div class="usage-item">
        <div class="usage-swatch" style="background:${color.hex}"></div>
        <span class="usage-name">${esc(color.name)}</span>
        <span class="usage-count">${u.count.toLocaleString()} 颗</span>
        <button class="btn-usage-del" onclick="deleteUsage('${proj.id}','${u.colorId}')">✕</button>
      </div>`;
    }).join('');

    return `<div class="project-card">
      <div class="project-header" onclick="toggleProject('${proj.id}')">
        <div class="project-info">
          <div class="project-name">${esc(proj.name)}</div>
          <div class="project-meta">${proj.description ? esc(proj.description)+' · ' : ''}${total.toLocaleString()} 颗 · ${proj.createdAt}</div>
        </div>
        <div class="project-header-right">
          <button class="btn btn-secondary btn-sm" onclick="openAddUsage(event,'${proj.id}')">+ 记录用量</button>
          <button class="btn btn-danger-outline btn-sm" onclick="deleteProject(event,'${proj.id}')">删除</button>
          <span class="project-arrow${isOpen?' open':''}" id="arrow-${proj.id}">›</span>
        </div>
      </div>
      <div class="project-body${isOpen?' open':''}" id="body-${proj.id}">
        <div class="usage-list">
          ${usageRows || '<p style="color:var(--text-secondary);font-size:0.85rem;padding:4px 0">暂无用量记录，点击"+ 记录用量"添加</p>'}
        </div>
      </div>
    </div>`;
  }).join('');
}

// ─── Inventory Actions ────────────────────────────────
function openAddColor() {
  editingColorId = null;
  document.getElementById('colorModalTitle').textContent = '添加颜色';
  document.getElementById('colorName').value  = '';
  document.getElementById('colorHex').value   = '#ff6b6b';
  document.getElementById('colorCount').value = '0';
  document.getElementById('colorPreviewSwatch').style.background = '#ff6b6b';
  showModal('colorModal');
  setTimeout(() => document.getElementById('colorName').focus(), 100);
}

function openEditColor(id) {
  editingColorId = id;
  const c = state.colors.find(x => x.id === id);
  if (!c) return;
  document.getElementById('colorModalTitle').textContent = '编辑颜色';
  document.getElementById('colorName').value  = c.name;
  document.getElementById('colorHex').value   = c.hex;
  document.getElementById('colorCount').value = c.count || 0;
  document.getElementById('colorPreviewSwatch').style.background = c.hex;
  showModal('colorModal');
}

function updateColorPreview() {
  document.getElementById('colorPreviewSwatch').style.background =
    document.getElementById('colorHex').value;
}

function saveColor() {
  const name  = document.getElementById('colorName').value.trim();
  const hex   = document.getElementById('colorHex').value;
  const count = Math.max(0, parseInt(document.getElementById('colorCount').value) || 0);
  if (!name) { showToast('请输入颜色名称', 'error'); return; }
  if (editingColorId) {
    const c = state.colors.find(x => x.id === editingColorId);
    if (c) Object.assign(c, { name, hex, count });
  } else {
    state.colors.push({ id: uid(), name, hex, count });
  }
  closeModal();
  render();
  scheduleSave();
}

function adjustCount(id, delta) {
  const c = state.colors.find(x => x.id === id);
  if (!c) return;
  c.count = Math.max(0, (c.count||0) + delta);
  renderInventory();
  scheduleSave();
}

function setCount(id, val) {
  const c = state.colors.find(x => x.id === id);
  if (!c) return;
  c.count = Math.max(0, parseInt(val) || 0);
  scheduleSave();
}

function deleteColor(id) {
  if (!confirm('确定删除这个颜色？相关用量记录也会失效。')) return;
  state.colors = state.colors.filter(x => x.id !== id);
  render();
  scheduleSave();
}

// ─── Project Actions ──────────────────────────────────
function openAddProject() {
  document.getElementById('projectName').value = '';
  document.getElementById('projectDesc').value = '';
  showModal('projectModal');
  setTimeout(() => document.getElementById('projectName').focus(), 100);
}

function saveProject() {
  const name = document.getElementById('projectName').value.trim();
  const desc = document.getElementById('projectDesc').value.trim();
  if (!name) { showToast('请输入项目名称', 'error'); return; }
  const proj = { id: uid(), name, description: desc, createdAt: today(), usage: [] };
  state.projects.unshift(proj);
  openProjectId = proj.id;
  closeModal();
  render();
  scheduleSave();
}

function deleteProject(e, id) {
  e.stopPropagation();
  if (!confirm('确定删除这个项目？')) return;
  state.projects = state.projects.filter(p => p.id !== id);
  if (openProjectId === id) openProjectId = null;
  render();
  scheduleSave();
}

function toggleProject(id) {
  openProjectId = openProjectId === id ? null : id;
  render();
}

function openAddUsage(e, projectId) {
  e.stopPropagation();
  if (!state.colors.length) { showToast('请先在库存中添加颜色', 'error'); return; }
  editingProjectId = projectId;
  document.getElementById('usageColorId').innerHTML =
    state.colors.map(c => `<option value="${c.id}">${esc(c.name)}（库存 ${c.count||0}）</option>`).join('');
  document.getElementById('usageCount').value = '';
  showModal('usageModal');
  setTimeout(() => document.getElementById('usageCount').focus(), 100);
}

function saveUsage() {
  const colorId = document.getElementById('usageColorId').value;
  const count   = parseInt(document.getElementById('usageCount').value) || 0;
  if (count <= 0) { showToast('请输入有效数量', 'error'); return; }
  const proj = state.projects.find(p => p.id === editingProjectId);
  if (!proj) return;
  const existing = proj.usage.find(u => u.colorId === colorId);
  if (existing) existing.count += count;
  else proj.usage.push({ colorId, count });
  openProjectId = editingProjectId;
  closeModal();
  render();
  scheduleSave();
}

function deleteUsage(projectId, colorId) {
  const proj = state.projects.find(p => p.id === projectId);
  if (!proj) return;
  proj.usage = proj.usage.filter(u => u.colorId !== colorId);
  render();
  scheduleSave();
}

// ─── UI Helpers ───────────────────────────────────────
function switchTab(name) {
  document.querySelectorAll('.tab').forEach((t, i) => {
    t.classList.toggle('active', ['inventory','projects','analysis'][i] === name);
  });
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.classList.toggle('active', p.id === 'tab-' + name);
  });
}

function showModal(id) {
  document.getElementById('modalOverlay').style.display = 'flex';
  document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function closeModal() {
  document.getElementById('modalOverlay').style.display = 'none';
}

function onOverlayClick(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

let toastTimer = null;
function showToast(msg, type) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast show' + (type ? ' ' + type : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.className = 'toast', 3000);
}

function uid() { return Math.random().toString(36).slice(2) + Date.now().toString(36); }
function today() { return new Date().toLocaleDateString('zh-CN'); }
function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ─── Init ─────────────────────────────────────────────
loadData();

// ─── Analysis ─────────────────────────────────────────
let analysisData = []; // [{colorId, qty}]

function onDragOver(e) {
  e.preventDefault();
  document.getElementById('uploadZone').classList.add('dragover');
}
function onDragLeave() {
  document.getElementById('uploadZone').classList.remove('dragover');
}
function onDrop(e) {
  e.preventDefault();
  document.getElementById('uploadZone').classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) loadImageFile(file);
}
function onImageSelected(e) {
  const file = e.target.files[0];
  if (file) loadImageFile(file);
}

function loadImageFile(file) {
  const reader = new FileReader();
  reader.onload = ev => {
    document.getElementById('previewImg').src = ev.target.result;
    document.getElementById('uploadZone').style.display = 'none';
    document.getElementById('previewSection').style.display = 'block';
  };
  reader.readAsDataURL(file);
}

// Parse text input: supports "G7 821 A2 584" or "G7 821\nA2 584" or "G7:821, A2:584"
function parseTextInput(text) {
  const results = new Map();
  // Normalize separators
  const normalized = text.replace(/[:,]/g, ' ').replace(/\s+/g, ' ');
  // Match all (colorCode number) pairs
  const re = /\b([A-Ma-m]\d{1,2})\b\s+(\d{1,6})\b/g;
  let m;
  while ((m = re.exec(normalized)) !== null) {
    const code = m[1].toUpperCase();
    const qty = parseInt(m[2]);
    if (qty > 0) results.set(code, qty);
  }

  analysisData = [...results.entries()]
    .sort(([a], [b]) => {
      const aL = a.match(/^[A-M]+/)?.[0] || '';
      const bL = b.match(/^[A-M]+/)?.[0] || '';
      if (aL !== bL) return aL.localeCompare(bL);
      return parseInt(a.match(/\d+/)?.[0] || 0) - parseInt(b.match(/\d+/)?.[0] || 0);
    })
    .map(([colorId, qty]) => ({ colorId, qty }));

  const resultSection = document.getElementById('analysisResultSection');
  if (analysisData.length > 0) {
    resultSection.style.display = 'block';
    renderAnalysisTable();
  } else {
    resultSection.style.display = 'none';
  }
}


function renderAnalysisTable() {
  const tbody = document.getElementById('analysisTableBody');
  tbody.innerHTML = analysisData.map((row, i) => {
    const color = state.colors.find(c => c.id === row.colorId.toUpperCase());
    const stock = color ? (color.count || 0) : null;
    const diff = stock !== null ? stock - row.qty : null;
    const swatchHtml = color
      ? `<div style="width:16px;height:16px;border-radius:50%;background:${color.hex};border:1.5px solid rgba(0,0,0,0.1);flex-shrink:0"></div>`
      : `<div style="width:16px;height:16px;border-radius:50%;background:#ddd;flex-shrink:0"></div>`;
    const stockCell = stock !== null ? stock.toLocaleString() : '<span class="not-found">未找到</span>';
    const diffCell = diff !== null
      ? `<span class="${diff >= 0 ? 'diff-ok' : 'diff-warn'}">${diff >= 0 ? '+' : ''}${diff.toLocaleString()} ${diff >= 0 ? '✓' : '⚠️'}</span>`
      : '—';

    return `<tr>
      <td>
        <div style="display:flex;align-items:center;gap:8px">
          ${swatchHtml}
          <input class="inline-input code-input" value="${esc(row.colorId)}"
            onblur="updateAnalysisField(${i},'colorId',this.value)" />
        </div>
      </td>
      <td><input class="inline-input qty-input" type="number" min="0" value="${row.qty}"
        onblur="updateAnalysisField(${i},'qty',this.value)" /></td>
      <td>${stockCell}</td>
      <td>${diffCell}</td>
      <td><button class="btn-tiny" onclick="deleteAnalysisRow(${i})" title="删除">🗑️</button></td>
    </tr>`;
  }).join('');
}

function updateAnalysisField(index, field, value) {
  if (!analysisData[index]) return;
  if (field === 'qty') {
    analysisData[index].qty = Math.max(0, parseInt(value) || 0);
  } else {
    analysisData[index].colorId = value.trim().toUpperCase();
  }
  renderAnalysisTable();
}

function addAnalysisRow() {
  analysisData.push({ colorId: '', qty: 0 });
  renderAnalysisTable();
  setTimeout(() => {
    const inputs = document.querySelectorAll('.code-input');
    if (inputs.length) inputs[inputs.length - 1].focus();
  }, 50);
}

function deleteAnalysisRow(index) {
  analysisData.splice(index, 1);
  renderAnalysisTable();
}

function applyDeduction() {
  if (!analysisData.length) { showToast('没有数据可扣减', 'error'); return; }

  const valid = analysisData.filter(row => {
    return state.colors.find(c => c.id === row.colorId.toUpperCase()) && row.qty > 0;
  });

  if (!valid.length) { showToast('没有匹配的色号，请检查色号是否正确', 'error'); return; }

  const notFound = analysisData.filter(row => !state.colors.find(c => c.id === row.colorId.toUpperCase()) && row.colorId);
  const insufficient = valid.filter(row => {
    const c = state.colors.find(x => x.id === row.colorId.toUpperCase());
    return c && (c.count || 0) < row.qty;
  });

  let confirmMsg = `确认为 ${valid.length} 个色号扣减库存？`;
  if (insufficient.length) confirmMsg += `\n\n⚠️ 以下 ${insufficient.length} 个色号库存不足，将置为 0：\n` + insufficient.map(r => r.colorId).join('、');
  if (notFound.length) confirmMsg += `\n\n❌ 以下色号未找到，将跳过：\n` + notFound.map(r => r.colorId).join('、');

  if (!confirm(confirmMsg)) return;

  valid.forEach(row => {
    const c = state.colors.find(x => x.id === row.colorId.toUpperCase());
    if (c) c.count = Math.max(0, (c.count || 0) - row.qty);
  });

  render();
  scheduleSave();
  renderAnalysisTable(); // Refresh diff column

  if (insufficient.length) {
    showToast(`扣减完成，${insufficient.length} 个色号库存不足已置零`, 'error');
  } else {
    showToast(`已成功扣减 ${valid.length} 个色号 ✓`, 'success');
  }
}

function resetAnalysis() {
  analysisData = [];
  document.getElementById('imageInput').value = '';
  document.getElementById('uploadZone').style.display = '';
  document.getElementById('previewSection').style.display = 'none';
  document.getElementById('usageTextInput').value = '';
  document.getElementById('analysisResultSection').style.display = 'none';
}
