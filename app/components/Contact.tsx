export default function Contact() {
  return (
    <section id="contact" style={{padding: '120px 0'}}>
      <div className="container">
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center'}}>
          <div className="reveal">
            <h2 className="mb-md">
              Ready to build <br /><span className="text-gradient">something great?</span>
            </h2>
            <p className="text-muted mb-lg"> Let's discuss your project and see how our software house can help you scale.
            </p>
          </div>

          <div className="reveal">
            <form style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '40px',
              borderRadius: '32px',
              boxShadow: '0 40px 100px rgba(0,0,0,0.5)'
            }}>
              <div style={{marginBottom: '24px'}}>
                <label style={{display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px'}}>Full Name</label>
                <input type="text" placeholder="John Doe" style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  color: '#fff',
                  outline: 'none'
                }} />
              </div>
              <div style={{marginBottom: '24px'}}>
                <label style={{display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px'}}>Email Address</label>
                <input type="email" placeholder="john@company.com" style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  color: '#fff',
                  outline: 'none'
                }} />
              </div>
              <div style={{marginBottom: '24px'}}>
                <label style={{display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px'}}>Project Brief</label>
                <textarea rows={4} placeholder="Tell us about your project..." style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  color: '#fff',
                  outline: 'none'
                }} />
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}