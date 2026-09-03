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

        // main hovered card tilts and pops forward; remove sibling lift
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(28px) scale(1.08)`;
        card.style.boxShadow = '0 36px 72px rgba(2,8,23,0.6), 0 8px 18px rgba(0,0,0,0.36)';
        card.style.filter = 'brightness(1.02) saturate(1.02)';
      };

      const onLeave = () => {
        // Reset only the hovered card styles
        card.style.transform = '';
        card.style.boxShadow = '';
        card.style.filter = '';
      };

      const onEnter = (e) => {
        // Apply a small default tilt immediately when the cursor enters so the effect is visible
        const rect = card.getBoundingClientRect();
        const x = e?.clientX ?? rect.left + rect.width / 2;
        const y = e?.clientY ?? rect.top + rect.height / 2;
        const px = (x / rect.width - 0.5) * 2;
        const py = (y / rect.height - 0.5) * 2;
        const rotateY = px * 8;
        const rotateX = -py * 8;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.06)`;
        card.style.boxShadow = '0 28px 56px rgba(2,8,23,0.55), 0 6px 16px rgba(0,0,0,0.35)';
        card.style.filter = 'brightness(1.02) saturate(1.02)';
      };

      card.addEventListener('mouseenter', onEnter);
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
