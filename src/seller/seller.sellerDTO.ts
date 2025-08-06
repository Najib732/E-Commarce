import {Entity,PrimaryColumn,Column,BeforeInsert} from 'typeorm';

@Entity('seller')
export class Seller {
  @PrimaryColumn()
  id: string;

  @BeforeInsert()
  generateId() {
    this.id = 'seller_' + Math.floor(Math.random() * 1000000);
  }

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  fullName: string;

  @Column('bigint', { unsigned: true })
  phone: number;
}