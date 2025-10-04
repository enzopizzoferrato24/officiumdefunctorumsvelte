<script>
  export let currentPage = '';
</script>

<header>
  <h1><a href="/">OFFICIVM<br>DEFVNCTORVM</a></h1>
  <nav>
    <ul>
      <li><a href="/about" class:active={currentPage === 'about'}>About</a></li>
      <li><a href="/preparation" class:active={currentPage === 'preparation'}>Preparation</a></li>
      <li><a href="/vespers" class:active={currentPage === 'vespers'}>Vespers</a></li>
      <li><a href="/matins" class:active={currentPage === 'matins'}>Matins</a></li>
      <li><a href="/lauds" class:active={currentPage === 'lauds'}>Lauds</a></li>
      <li><a href="/purchase" class:active={currentPage === 'purchase'}>Purchase</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    background-color: #000000;
    color: #d4b038;
    padding: 15px;
    text-align: center;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    margin-top: -20px;
  }
  
  header h1 {
    font-family: 'Libre Baskerville', serif;
    margin: 0;
  }
  
  header h1 a {
    text-decoration: none !important;
    color: #d4b038 !important;
    cursor: default !important;
    background-color: #000000;
    border: 2px solid #000000;
    border-radius: 5px;
    display: inline-block;
    padding: 10px 20px;
    transition: background-color 0.3s;
  }
  
  header h1 a:hover {
    background-color: #000000;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    justify-content: center;
  }
  
  nav li:first-child {
    position: absolute;
    left: 0;
  }
  
  nav li:last-child {
    position: absolute;
    right: 0;
  }
  
  nav li:not(:first-child):not(:last-child) {
    margin: 0 15px;
  }
  
  nav li {
    display: inline;
  }
  
  header nav ul li a {
    color: #d4b038 !important;
    text-decoration: none !important;
    cursor: default !important;
    font-weight: bold;
    background-color: #000000 !important;
    padding: 8px 15px;
    border: 2px solid #000000 !important;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  header nav ul li a:hover,
  header nav ul li a.active {
    text-decoration: none !important;
    background-color: #524e4e;
  }
</style>
