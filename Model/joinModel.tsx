export class JoinModel{
    constructor(json){
        [
            this.id,
            this.email,
            this.password,
            this.name,
            this.birth,
            this.phone
        ]
        =
        [
            json.id,
            json.email,
            json.password,
            json.name,
            json.birth,
            json.phone
        ];
    };

    static fromJson(json){
        return new JoinModel(json);
    };
};