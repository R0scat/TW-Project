window.onload = function() {
    if (sessionStorage.length > 1) {
        var element = document.getElementById('login');
        var logoutToAppend = document.createElement('a');
        var div = document.getElementById('dropContent');
        element.remove();

        logoutToAppend.text = 'Logout';
        logoutToAppend.href = 'requests.html';

        div.appendChild(logoutToAppend);
        sessionStorage.clear();
    }
}