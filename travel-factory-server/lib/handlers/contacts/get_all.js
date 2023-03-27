module.exports = ({contactsDB}) => {
    return async  (req,res) => {
        res
          .status(200)
          .json(await contactsDB.getAllContacts())
      }
}