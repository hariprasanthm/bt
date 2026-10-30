/**
 * Best Technology IT Solution: First-paint splash loader.
 * Shown before the app bundle loads, matching the official BrandLoader component.
 */
(function () {
  const _root = document.querySelector('#root');
  if (_root && _root.innerHTML === '') {
    _root.innerHTML = `
      <style>
        html, body, #root {
          height: 100%;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background: #020B1C;
        }

        #root {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bt-splash-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          user-select: none;
          padding: 24px;
        }

        .bt-splash-stage {
          position: relative;
          width: 96px;
          height: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .bt-splash-radar {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 102, 255, 0.35) 0%, rgba(0, 229, 255, 0.1) 60%, transparent 75%);
          animation: btSplashRipple 2.2s ease-out infinite;
        }

        .bt-splash-orbit-outer {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1.5px dashed rgba(0, 229, 255, 0.3);
          animation: btSplashSpin 8s linear infinite reverse;
        }

        .bt-splash-orbit-main {
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          border: 2.5px solid transparent;
          border-top-color: #00E5FF;
          border-right-color: #0066FF;
          filter: drop-shadow(0 0 8px rgba(0, 229, 255, 0.6));
          animation: btSplashSpin 1.1s cubic-bezier(0.5, 0.1, 0.5, 0.9) infinite;
        }

        .bt-splash-orbit-inner {
          position: absolute;
          inset: 8px;
          border-radius: 50%;
          border: 1.5px solid transparent;
          border-bottom-color: #00D2FF;
          border-left-color: rgba(0, 102, 255, 0.5);
          animation: btSplashSpin 1.6s ease-in-out infinite reverse;
        }

        .bt-splash-emblem {
          width: 60px;
          height: 60px;
          object-fit: contain;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 0 14px rgba(0, 194, 255, 0.75)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.8));
          animation: btSplashGlow 2s ease-in-out infinite;
        }

        .bt-splash-brand {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 2.5px;
          color: #FFFFFF;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .bt-splash-brand span {
          color: #00E5FF;
        }

        .bt-splash-sub {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.8px;
          color: #64748B;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .bt-splash-track {
          width: 150px;
          height: 3px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.08);
          overflow: hidden;
          position: relative;
        }

        .bt-splash-laser {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent 0%, #0066FF 40%, #00E5FF 70%, transparent 100%);
          animation: btSplashLaser 1.4s ease-in-out infinite;
        }

        .bt-splash-status {
          margin-top: 12px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #00E5FF;
          letter-spacing: 0.5px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .bt-splash-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00E5FF;
          box-shadow: 0 0 8px #00E5FF;
          animation: btSplashDot 1.2s ease-in-out infinite;
        }

        @keyframes btSplashSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes btSplashRipple {
          0% { transform: scale(0.6); opacity: 0.9; }
          70% { transform: scale(1.4); opacity: 0.15; }
          100% { transform: scale(1.7); opacity: 0; }
        }

        @keyframes btSplashGlow {
          0%, 100% {
            transform: scale(0.97);
            filter: drop-shadow(0 0 10px rgba(0, 194, 255, 0.6)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.8));
          }
          50% {
            transform: scale(1.02);
            filter: drop-shadow(0 0 22px rgba(0, 229, 255, 0.95)) drop-shadow(0 6px 14px rgba(0, 0, 0, 0.9));
          }
        }

        @keyframes btSplashLaser {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }

        @keyframes btSplashDot {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      </style>

      <div class="bt-splash-container">
        <div class="bt-splash-stage">
          <span class="bt-splash-radar"></span>
          <span class="bt-splash-orbit-outer"></span>
          <span class="bt-splash-orbit-main"></span>
          <span class="bt-splash-orbit-inner"></span>
          <img class="bt-splash-emblem" src="/images/logo-icon-darkmode.png" alt="Best Technology" />
        </div>

        <div class="bt-splash-brand">BEST <span>TECHNOLOGIES</span></div>
        <div class="bt-splash-sub">Security & IT Solutions</div>

        <div class="bt-splash-track">
          <div class="bt-splash-laser"></div>
        </div>

        <div class="bt-splash-status">
          <span class="bt-splash-dot"></span>
          <span>Initializing Security Systems...</span>
        </div>
      </div>
    `;
  }
})();
