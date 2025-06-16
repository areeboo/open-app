"use client";

export default function TestModalButton() {
  const openModal = (e) => {
    document.getElementById('test_modal').showModal();
    
    // Create ripple effect
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.className = 'absolute inset-0 bg-white opacity-30 rounded-full animate-ripple';
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <div className="btn-container relative overflow-hidden">
      <button
        className="btn btn-accent text-lg px-8 py-4
                  transform transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                  active:scale-95
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent
                  animate-pulse"
        onClick={openModal}
      >
        Open Modal
      </button>
    </div>
  );
}