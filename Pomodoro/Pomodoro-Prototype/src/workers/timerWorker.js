let isRunning = false;

self.onmessage = function (event) {
    const state = event.data;
    const { activeTask, secondsRemaining } = state;

    if (!activeTask || secondsRemaining <= 0) return;
    if (isRunning) return;

    isRunning = true;

    const endDate = activeTask.startDate + secondsRemaining * 1000;

    function tick() {
        const countDownSeconds = Math.round((endDate - Date.now()) / 1000);
        self.postMessage(countDownSeconds);

        if (countDownSeconds <= 0) {
            isRunning = false;
            return;
        }

        setTimeout(tick, 1000);
    }

    tick();
};
