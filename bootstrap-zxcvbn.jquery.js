// requires Bootstrap 4 / zxcvbn
(function ($) {
    var settings;
    $.fn.zxcvbnProgress = function (options) {
        settings = $.extend({
            ratings: ["Very weak", "weak", "OK", "Strong", "Very strong"],
            progressClasses: ['bg-danger', 'bg-warning', 'bg-warning', 'bg-success', 'bg-success']
        }, options);
        var $passwordInput = $(settings.passwordInput),
            $progress = this;
        if (!$passwordInput.length) throw new TypeError('Please enter a valid password input');
        $passwordInput.on('keyup', function () {
            updateProgress($passwordInput, $progress);
        });
        updateProgress($passwordInput, $progress);
    };
    function updateProgress($passwordInput, $progress) {
        var passwordValue = $passwordInput.val();
        if (passwordValue) {
            var result = zxcvbn(passwordValue, settings.userInputs),
                score = result.score,
                scorePercentage = (score + 1) * 20;
            $progress.css('width', scorePercentage + '%');
            $progress.removeClass(settings.progressClasses.join(' ')).addClass(settings.progressClasses[score]).text(settings.ratings[score]);
        } else {
            $progress.css('width', 0 + '%');
            $progress.removeClass(settings.progressClasses.join(' ')).text('');
        }
    }
})(jQuery);
