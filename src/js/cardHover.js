export function setupCardHover() {
  const lists = document.querySelectorAll('.card-list');
  lists.forEach((list) => {
    list.style.perspective = '1200px';
    const cards = list.querySelectorAll('.card');

    cards.forEach((card) => {
      card.style.transformStyle = 'preserve-3d';
      card.style.transition = 'transform 300ms cubic-bezier(.2,.9,.2,1), box-shadow 300ms ease, filter 300ms ease';
      card.style.willChange = 'transform';

      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const px = (x / rect.width - 0.5) * 2; // -1 .. 1
        const py = (y / rect.height - 0.5) * 2; // -1 .. 1
        const rotateY = px * 12; // degrees
        const rotateX = -py * 12; // degrees

        // main hovered card tilts and pops forward
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(28px) scale(1.04)`;
        card.style.boxShadow = '0 30px 60px rgba(2,8,23,0.55), 0 6px 16px rgba(0,0,0,0.35)';

        // siblings lift slightly away to create the "push" effect
        cards.forEach((c) => {
          if (c === card) return;
          c.style.transform = 'translateY(-14px) scale(0.985)';
          c.style.filter = 'brightness(0.92) saturate(0.95)';
          c.style.boxShadow = '0 10px 30px rgba(2,8,23,0.28)';
        });
      };

      const onLeave = () => {
        cards.forEach((c) => {
          c.style.transform = '';
          c.style.boxShadow = '';
          c.style.filter = '';
        });
      };

      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      card.addEventListener('touchstart', (e) => {
        // approximate center tilt on touch
        const fake = { clientX: card.getBoundingClientRect().left + card.offsetWidth / 2, clientY: card.getBoundingClientRect().top + card.offsetHeight / 2 };
        onMove(fake);
      });
      card.addEventListener('touchend', onLeave);
    });
  });
}
