document.addEventListener('DOMContentLoaded', function() {
    const newPartyForm = document.getElementById('new-party-form');

    newPartyForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const partyName = document.getElementById('party-name').value;
        const partyLocation = document.getElementById('party-location').value;
        const partyDate = document.getElementById('party-date').value;

        // Ici, vous pouvez ajouter une requête pour créer une nouvelle soirée
        // en utilisant fetch API ou une bibliothèque comme axios.
    });
});
