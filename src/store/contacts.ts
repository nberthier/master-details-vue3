import Contact from "@/models/contact"
import moment from "moment";

export default {
    namespaced: true,
    state: {
        contacts: [
            new Contact("berthier", "nicolas", "0761577989", "https://cdn.discordapp.com/attachments/159394283072258048/693816001619296266/20200329_153653.jpg", moment('1995-5-29').toDate(), "90 rue de la Solidarité MONTREUIL"),
            new Contact("boissard", "clement", "0654785412", "https://gal.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2F0d8571a1-ca74-4006-a285-152a29496f44.2Ejpeg/620x430/quality/80/tom-cruise.jpeg", moment('1997-12-31').toDate(), "120 rue de Suresnes NANTERRE"),
            new Contact("boukrourou", "karima", "0214586585", "https://star24.tv/wp-content/uploads/2017/12/Ariana-grande.jpg", moment('1993-4-08').toDate(), "120 rue de Suresnes NANTERRE"),
          ],
    },
    mutations: {
        ADD (state: any, contact: Contact) {
            state.contacts.push(contact);
        },
        DEL (state: any, contactIndex: number) {
            state.contacts.splice(contactIndex, 1);
        },
    },
    actions: {
        add (context: any, contact: Contact) {
            context.commit("ADD", contact);
        },
        del (context: any, contactIndex: number) {
            context.commit("DEL", contactIndex);
        },
    },
    getters: {
        getContacts: (state: any) : [Contact] => state.contacts,
    }
}