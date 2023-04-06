module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            idModeEmploi: Number,
            Num: Number,
            Nominage: String,
            Commentaire: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Etape = mongoose.model("etape", schema);
    return Etape;
};

