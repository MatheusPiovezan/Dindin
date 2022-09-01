export function dayFormat(date) {
    const day = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC', weekday: 'long' }).format(new Date(date));
    const dayUpperCase = day[0].toUpperCase() + day.slice(1, day.length);
    return dayUpperCase.replace('-feira', '');
}

export function dateFormat(date) {
    return new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
}

export function formatMoney(value) {
    return value.toLocaleString('pt-br',
        { style: 'currency', currency: 'BRL' }
    );
}