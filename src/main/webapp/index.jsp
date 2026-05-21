<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.net.InetAddress" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>K8s Cloud Project Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background-color: #0f172a; color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        .dashboard-card { background: linear-gradient(145deg, #1e293b, #0f172a); border: 1px solid #334155; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .status-badge { background-color: #10b981; color: #fff; padding: 5px 15px; border-radius: 50px; font-weight: bold; animation: blink 2s infinite; }
        .highlight-text { color: #38bdf8; font-weight: bold; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
    </style>
</head>
<body>

<div class="container vh-100 d-flex justify-content-center align-content-center flex-wrap">
    <div class="row w-100 justify-content-center">
        <div class="col-md-8 dashboard-card p-5 text-center">
            
            <h1 class="mb-4 display-5 fw-bold text-transparent bg-clip-text bg-gradient" style="background-image: linear-gradient(to right, #38bdf8, #818cf8);">
                K8s 인프라 아키텍처 완공 기념 대시보드
            </h1>
            <p class="lead text-muted mb-5">Jenkins - Ansible - Kubernetes 자동화 프로젝트</p>
            
            <hr class="my-4" style="border-color: #334155;">

            <%
                InetAddress ip = InetAddress.getLocalHost();
                String hostname = ip.getHostName();
                String ipAddress = ip.getHostAddress();
            %>

            <div class="row my-4 text-start justify-content-center">
                <div class="col-md-10 fs-5 bg-black bg-opacity-25 p-4 rounded-3 border border-secondary border-opacity-25">
                    <p>🟢 시스템 상태: <span class="status-badge">RUNNING</span></p>
                    <p>🏗️ 인프라 아키텍터: <span class="text-warning fw-bold">PARK CHANG GYU</span></p>
                    <p>📡 응답 중인 파드(Pod) 이름: <span class="highlight-text"><%= hostname %></span></p>
                    <p>🆔 파드 내부 사설 IP: <span class="highlight-text"><%= ipAddress %></span></p>
                </div>
            </div>

            <hr class="my-4" style="border-color: #334155;">

            <p class="text-muted small">💡 새로고침(F5)을 누르면 AWS ALB가 k8s-wk1과 k8s-wk2로 트래픽을 교대로 분산하는 것을 확인할 수 있습니다.</p>
            
        </div>
    </div>
</div>

</body>
</html>
