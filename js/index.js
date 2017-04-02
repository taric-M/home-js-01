alert('Для розв`язання квадратного рівняння потрібно звести його до виду Ax^2+Bx+C=0');
var a = Number(prompt('Вкажи значення А:'));
var b = Number(prompt('Вкажи значення B:'));
var c = Number(prompt('Вкажи значення C:'));

function result(a, b, c) {
    if (a === 0) {
        return 'Дане рівняння не є квадратним (коефіцієнт А=0.)';
    } else {
        var D = b*b-4*a*c;
        if (D < 0) {
          return 'Квадратне рівняння коренів не має'; 
        } else if (D === 0) {
            var x = -b/(2*a);
            return 'X = '+x;
        } else {
            var x = [];
            var x1 = (-b+Math.sqrt(D))/(2*a);
            x.push('X1 = '+x1);
            var x2 = (-b-Math.sqrt(D))/(2*a);
            x.push(' X2 = '+x2);
            return x;
        }
    }
}
document.write('Відповідь:  ' + result(a, b, c));
