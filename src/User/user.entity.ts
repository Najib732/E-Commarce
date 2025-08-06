/*
export class User {
 
}
*/

import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, } from 'typeorm';
@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 150 })
  fullName: string;

  @Column({ type: 'boolean', default: false })
  isActive: boolean;

  @BeforeInsert()
  generateId() {
    this.id = crypto.randomUUID();
  }


}
