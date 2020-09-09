module.exports = {
    ra: {
        action: {
            delete: 'Διαγραφη',
            show: 'Εμφανιση',
            list: 'Λιστα',
            save: 'Αποθηκευση',
            create: 'Δημιουργια',
            edit: 'Επεξεργασια',
            sort: 'Ταξινόμηση',
            cancel: 'Ακυρωση',
            undo: 'Αναιρεση',
            refresh: 'Ανανεωση',
            add_filter: 'Προσθηκη φιλτρου',
            remove_filter: 'Διαγραφη φιλτρου',
            back: 'Επιστροφη',
            bulk_actions: '%{smart_count} επιλεγμένα',
            unselect: 'Καθαρισμός',
            expand: 'Επέκταση',
            search: 'Αναζήτηση'
        },
        boolean: {
            true: 'Ναι',
            false: 'Όχι',
        },
        page: {
            list: 'Λίστα των %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Δημιουργία %{name}',
            dashboard: 'Αρχική',
            not_found: 'Η σελίδα δεν υπάρχει',
            loading: 'Φόρτωση',
        },
        input: {
            file: {
                upload_several: 'Εναποθέστε μερικά αρχεία για ανέβασμα, ή κάντε κλίκ για να επιλέξετε ένα.',
                upload_single: 'Εναποθέστε ένα αρχείο για ανέβασμα, ή κάντε κλίκ για να το επιλέξετε.',
            },
            image: {
                upload_several: 'Εναποθέστε μερικές εικόνες για ανέβασμα, ή κάντε κλίκ για να επιλέξετε μία.',
                upload_single: 'Εναποθέστε μία εικόνα για ανέβασμα, ή κάντε κλίκ για να το επιλέξετε.',
            },
            references: {
                all_missing: 'Δεν είναι δυνατή η εύρεση δεδομένων αναφοράς.',
                many_missing:
                    'Τουλάχιστον μία από τις σχετικές αναφορές δεν φαίνεται πλέον να είναι διαθέσιμη.',
                single_missing:
                    'Η συσχετισμένη αναφορά δεν φαίνεται πλέον να είναι διαθέσιμη.',
            },
        },
        message: {
            yes: 'Ναι',
            no: 'Όχι',
            are_you_sure: 'Είστε σίγουρος;',
            about: 'Σχετικά',
            not_found: 'Είτε πληκτρολογήσατε λάθος URL, είτε ακολουθήσατε λάθος σύνδεσμο',
            loading: 'Η σελίδα φορτώνει, παρακαλώ περιμένετε',
            invalid_form: 'Η φόρμα δεν είναι έγκυρη. Παρακαλώ ελέγξτε για λάθη',
            delete_title: 'Διαγραφή %{name} #%{id}',
            delete_content: 'Είστε σίγουρος οτι θέλετε να διαγράψετε αυτή την εγγραφή;',
            bulk_delete_title:
                'Διαγραφή %{name} |||| Διαγραφή %{smart_count} %{name} εγγραφών',
            bulk_delete_content:
                'Είστε σίγουρος ότι θέλετε να διαγράψετε το %{name}? |||| Είστε σίγουρος ότι θέλετε να διαγράψετε αυτές τις %{smart_count} εγγραφές?',
        },
        navigation: {
            no_results: 'Δεν βρέθηκαν αποτελέσματα',
            no_more_results: 'Ο αριθμός σελίδας %{page} είναι εκτός ορίων. Δοκιμάστε την προηγούμενη σελίδα.',
            page_out_of_boundaries: 'Η σελίδα με αριθμό %{page} είναι εκτός ορίων',
            page_out_from_end: 'Δεν είναι δυνατή η περιήγηση μετά την τελευταία σελίδα',
            page_out_from_begin: 'Δεν είναι δυνατή η περιήγηση πριν την 1η σελίδα',
            page_range_info: '%{offsetBegin}-%{offsetEnd} από %{total}',
            page_rows_per_page: "Καταχωρίσεις ανά σελίδα",
            next: 'Επομενη',
            prev: 'Προηγουμενη',
        },
        auth: {
            username: 'Όνομα χρήστη',
            password: 'Κωδικός χρήστη',
            sign_in: 'Εισοδος',
            sign_in_error: 'Η ταυτοποίηση απέτυχε, προσπαθήστε ξανά',
            logout: 'Αποσυνδεση',
            user_menu: 'Μενού Χρήστη',
        },
        notification: {
            updated: 'Η εγγραφή ανανεώθηκε',
            created: 'Η εγγραφή δημιουργήθηκε',
            deleted: 'Η εγγραφή διαγράφηκε',
            bad_item: 'Εσφαλμένη εγγραφή',
            item_doesnt_exist: 'Η εγγραφή δεν υπάρχει',
            http_error: 'Σφάλμα επικοινωνίας με τον διακομιστή',
            canceled: 'Η ενέργεια ακυρώθηκε',
        },
        validation: {
            required: 'Υποχρεωτικό',
            minLength: 'Χρειάζονται τουλάχιστον %{min} χαρακτήρες',
            maxLength: 'Χρειάζονται το πολύ %{max} χαρακτήρες',
            minValue: 'Χρειάζονται τουλάχιστον %{min}',
            maxValue: 'Χρειάζονται το πολύ %{max} ή λιγότερο',
            number: 'Πρέπει να είναι αριθμός',
            email: 'Πρέπει να είναι έγκυρο email',
        },
    }
};
