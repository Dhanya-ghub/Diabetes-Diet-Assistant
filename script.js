function startPlanner() {
  document.querySelector('.landing').style.display = 'none';
  document.querySelector('.main-content').style.display = 'block';
  showTab('meal');
}

function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

function switchLanguage(lang) {
  alert('Language switched to: ' + lang);
}
