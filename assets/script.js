function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: 'Check out Fully Grounded Coffee Co.!',
      url: window.location.href
    });
  } else {
    alert('Sharing is not supported on this browser.');
  }
}