module no.ntnu.cardsnap.persistence {
    requires transitive no.ntnu.cardsnap.domain;
    requires transitive com.google.gson;

    exports no.ntnu.cardsnap.persistence;

    opens no.ntnu.cardsnap.persistence to com.google.gson;
}
