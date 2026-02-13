function ejercicio14() {
    let nums = [1,2,3,2,1];
    let esPalindromo = true;

    for (let i = 0; i < nums.length / 2; i++) {
        if (nums[i] !== nums[nums.length - 1 - i]) {
            esPalindromo = false;
        }
    }

    alert(esPalindromo ? "Es palindrome" : "No es palindrome");
}

ejercicio14();
