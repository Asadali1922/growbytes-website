export default function Footer() {
  return (
    <footer style={{
      padding: '48px 0',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div className="container">
        <div className="flex-between">
          <div>
            <h4 style={{color: '#fff', marginBottom: '8px'}}>GrowBytes</h4>
            <p style={{fontSize: '14px'}}>Building the future, one byte at a time.</p>
          </div>
          <div style={{display: 'flex', gap: '32px'}}>
            <a href="#" style={{fontSize: '14px'}}>Twitter</a>
            <a href="#" style={{fontSize: '14px'}}>LinkedIn</a>
            <a href="#" style={{fontSize: '14px'}}>GitHub</a>
          </div>
        </div>
        <div style={{marginTop: '32px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '12px', opacity: 0.5}}>
          © 2025 GrowBytes Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}