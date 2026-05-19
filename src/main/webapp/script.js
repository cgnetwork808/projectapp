/* 배경 파티클 애니메이션 구현 */
const canvas = document.getElementById('particle-canvas');
// 화면 크기에 맞춰 캔버스 크기 조정
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 100; // 파티클 개수 (성능을 위해 100개로 제한)

// 파티클 객체 생성자
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = (Math.random() - 0.5) * 1; // X축 이동 속도 (조금 느리게)
        this.speedY = (Math.random() - 0.5) * 1; // Y축 이동 속도
        this.size = Math.random() * 2 + 0.5; // 크기
    }

    // 위치 업데이트 및 화면 경계 처리
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    // 그리기 (민트색 파티클 효과)
    draw() {
        ctx.fillStyle = '#66fcf1'; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.random() * Math.PI * 2);
        ctx.fill();
    }
}

// 파티클 초기화
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// 애니메이션 루프
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 이전 프레임 지우기

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // 파티클끼리 선 연결 (조금 화려하게 보이도록)
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) { // 가까운 파티클끼리만 선 연결
                ctx.strokeStyle = 'rgba(102, 252, 241, ' + (1 - distance / 100) + ')';
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

animate();
