document.addEventListener("DOMContentLoaded", function() {
    const consoleBox = document.getElementById("consoleBox");
    
    // 추가될 시뮬레이션 로그 리스트
    const extraLogs = [
        "[SYSTEM] Monitoring resource metrics... CPU 12%, MEM 44%",
        "[K8S] Readiness probe passed for deployment/myapp.",
        "[ROUTING] AWS ALB Ingress controller forwarding traffic smoothly.",
        "[SYSTEM] Web traffic dashboard synchronized successfully.",
        "[MONITOR] All service mesh sidecars operating in high availability mode."
    ];
    
    let logIndex = 0;

    // 3초마다 로그를 터미널 박스에 하나씩 추가해주는 이벤트
    setInterval(() => {
        if (logIndex < extraLogs.length) {
            const newLog = document.createElement("p");
            newLog.className = "log-line";
            newLog.style.color = "#00ffff"; // 새로 추가되는 로그는 하늘색 포인트
            newLog.textContent = extraLogs[logIndex];
            consoleBox.appendChild(newLog);
            
            // 로그가 추가되면 자동으로 스크롤을 맨 밑으로 이동
            consoleBox.scrollTop = consoleBox.scrollHeight;
            logIndex++;
        }
    }, 3000);
});
