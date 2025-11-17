async function loadFarms(){
  try {
    const res = await fetch('/api/farms');
    if(!res.ok) throw new Error('Network response not ok: ' + res.status);
    const farms = await res.json();
    const ul = document.getElementById('farms');
    const status = document.getElementById('status');
    status.textContent = 'Farms:';
    if(farms.length === 0){
      ul.innerHTML = '<li>No farms yet</li>';
      return;
    }
    ul.innerHTML = farms.map(f => `<li><strong>${f.name}</strong> — ${f.location}</li>`).join('');
  } catch(err){
    document.getElementById('status').textContent = 'Failed to load farms: ' + err.message;
  }
}
window.addEventListener('DOMContentLoaded', loadFarms);
